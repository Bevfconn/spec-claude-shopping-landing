import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load the page successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Shopping/i);
  });

  test('should display hero section with headline and CTA', async ({ page }) => {
    const heroSection = page.locator('section[aria-label="Hero"]');
    await expect(heroSection).toBeVisible();

    // Check for headline
    const headline = heroSection.locator('h1');
    await expect(headline).toBeVisible();

    // Check for CTA button (link styled as button)
    const ctaButton = heroSection.locator('a').first();
    await expect(ctaButton).toBeVisible();
  });

  test('should display featured products section', async ({ page }) => {
    const productsSection = page.locator('section[aria-label="Featured Products"]');
    await expect(productsSection).toBeVisible();

    // Check for product cards
    const productCards = productsSection.locator('[data-testid="product-card"], .MuiCard-root');
    const count = await productCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display categories section', async ({ page }) => {
    const categoriesSection = page.locator('section[aria-label="Shop by Category"]');
    await expect(categoriesSection).toBeVisible();

    // Check for category cards
    const categoryCards = categoriesSection.locator('.MuiCard-root');
    const count = await categoryCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display testimonials section', async ({ page }) => {
    const testimonialsSection = page.locator('section[aria-label="Customer Testimonials"]');
    await expect(testimonialsSection).toBeVisible();
  });

  test('should display footer with newsletter form', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check for newsletter form
    const emailInput = footer.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();

    // Check for subscribe button
    const subscribeButton = footer.locator('button:has-text("Subscribe")');
    await expect(subscribeButton).toBeVisible();
  });

  test('should display header with navigation', async ({ page }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Check for logo
    const logo = header.locator('a:has-text("ShopLogo")');
    await expect(logo).toBeVisible();

    // Check for cart badge
    const cartButton = header.locator('[aria-label*="cart"]');
    await expect(cartButton).toBeVisible();
  });
});

test.describe('Landing Page - Responsive', () => {
  test('should show correct number of products on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const productsSection = page.locator('section[aria-label="Featured Products"]');
    const productCards = productsSection.locator('.MuiCard-root');
    const count = await productCards.count();

    // Should show 8 products on desktop
    expect(count).toBe(8);
  });

  test('should show mobile drawer button on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menuButton = page.locator('button[aria-label="Open menu"]');
    await expect(menuButton).toBeVisible();
  });

  test('should open mobile drawer when menu button is clicked', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();

    const drawer = page.locator('.MuiDrawer-paper');
    await expect(drawer).toBeVisible();
  });
});

test.describe('Landing Page - Interactions', () => {
  test('should navigate when clicking product card', async ({ page }) => {
    await page.goto('/');

    const productCard = page.locator('section[aria-label="Featured Products"] .MuiCard-root').first();
    const link = productCard.locator('a').first();

    if (await link.count() > 0) {
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
    }
  });

  test('should expand search bar when search icon is clicked', async ({ page }) => {
    await page.goto('/');

    const searchButton = page.locator('button[aria-label="Open search"]');
    await searchButton.click();

    const searchInput = page.locator('input[aria-label="Search products"]');
    await expect(searchInput).toBeVisible();
  });

  test('should validate newsletter email input', async ({ page }) => {
    await page.goto('/');

    const emailInput = page.locator('footer input[type="email"]');
    const subscribeButton = page.locator('footer button:has-text("Subscribe")');

    // Submit with invalid email
    await emailInput.fill('invalid-email');
    await subscribeButton.click();

    // Should show error
    const errorMessage = page.locator('footer .MuiFormHelperText-root');
    await expect(errorMessage).toBeVisible();
  });

  test('should submit newsletter with valid email', async ({ page }) => {
    await page.goto('/');

    const emailInput = page.locator('footer input[type="email"]');
    const subscribeButton = page.locator('footer button:has-text("Subscribe")');

    // Submit with valid email
    await emailInput.fill('test@example.com');
    await subscribeButton.click();

    // Should show success message
    const successAlert = page.locator('footer .MuiAlert-standardSuccess');
    await expect(successAlert).toBeVisible({ timeout: 5000 });
  });
});
