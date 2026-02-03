import { test, expect } from '@playwright/test';

test.describe('Navigation - Desktop', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
  });

  test('should display desktop navigation', async ({ page }) => {
    const nav = page.locator('nav[aria-label="Main navigation"]');
    await expect(nav).toBeVisible();
  });

  test('should open dropdown menu on click', async ({ page }) => {
    const dropdownButton = page.locator('nav button[aria-haspopup="true"]').first();

    if (await dropdownButton.count() > 0) {
      await dropdownButton.click();

      const menu = page.locator('.MuiMenu-paper');
      await expect(menu).toBeVisible();
    }
  });

  test('should close dropdown menu on escape key', async ({ page }) => {
    const dropdownButton = page.locator('nav button[aria-haspopup="true"]').first();

    if (await dropdownButton.count() > 0) {
      await dropdownButton.click();

      const menu = page.locator('.MuiMenu-paper');
      await expect(menu).toBeVisible();

      await page.keyboard.press('Escape');
      await expect(menu).not.toBeVisible();
    }
  });

  test('should close dropdown menu when clicking menu item', async ({ page }) => {
    const dropdownButton = page.locator('nav button[aria-haspopup="true"]').first();

    if (await dropdownButton.count() > 0) {
      await dropdownButton.click();

      const menu = page.locator('.MuiMenu-paper');
      await expect(menu).toBeVisible();

      const menuItem = menu.locator('.MuiMenuItem-root').first();
      await menuItem.click();

      await expect(menu).not.toBeVisible();
    }
  });

  test('should navigate via keyboard through nav items', async ({ page }) => {
    // Focus the first nav button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Continue tabbing through nav items
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const focusedElement = page.locator(':focus');
      await expect(focusedElement).toBeVisible();
    }
  });
});

test.describe('Navigation - Mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  test('should hide desktop navigation on mobile', async ({ page }) => {
    const desktopNav = page.locator('nav[aria-label="Main navigation"]');
    await expect(desktopNav).not.toBeVisible();
  });

  test('should show mobile menu button', async ({ page }) => {
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await expect(menuButton).toBeVisible();
  });

  test('should open mobile drawer', async ({ page }) => {
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();

    const drawer = page.locator('.MuiDrawer-paper');
    await expect(drawer).toBeVisible();

    // Check for navigation items
    const navItems = drawer.locator('.MuiListItemButton-root');
    const count = await navItems.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should close mobile drawer when close button is clicked', async ({ page }) => {
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();

    const drawer = page.locator('.MuiDrawer-paper');
    await expect(drawer).toBeVisible();

    const closeButton = drawer.locator('button[aria-label="Close menu"]');
    await closeButton.click();

    await expect(drawer).not.toBeVisible();
  });

  test('should close mobile drawer when clicking nav item', async ({ page }) => {
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();

    const drawer = page.locator('.MuiDrawer-paper');
    await expect(drawer).toBeVisible();

    // Click a non-expandable nav item
    const navItem = drawer.locator('.MuiListItemButton-root').first();
    await navItem.click();

    await expect(drawer).not.toBeVisible();
  });

  test('should expand submenu in mobile drawer', async ({ page }) => {
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();

    const drawer = page.locator('.MuiDrawer-paper');
    const expandButton = drawer.locator('button[aria-expanded]').first();

    if (await expandButton.count() > 0) {
      await expandButton.click();

      // Check that submenu is visible
      const collapse = drawer.locator('.MuiCollapse-root');
      await expect(collapse.first()).toBeVisible();
    }
  });
});

test.describe('Header - Search', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should toggle search input on click', async ({ page }) => {
    const searchButton = page.locator('button[aria-label="Open search"]');
    await searchButton.click();

    const searchInput = page.locator('input[aria-label="Search products"]');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toBeFocused();
  });

  test('should close search input when close button is clicked', async ({ page }) => {
    const searchButton = page.locator('button[aria-label="Open search"]');
    await searchButton.click();

    const closeButton = page.locator('button[aria-label="Close search"]');
    await closeButton.click();

    const searchInput = page.locator('input[aria-label="Search products"]');
    await expect(searchInput).not.toBeVisible();
  });

  test('should navigate to search results on submit', async ({ page }) => {
    const searchButton = page.locator('button[aria-label="Open search"]');
    await searchButton.click();

    const searchInput = page.locator('input[aria-label="Search products"]');
    await searchInput.fill('test product');
    await searchInput.press('Enter');

    // Should navigate to search page (URL encoded)
    await expect(page).toHaveURL(/\/search\?q=test(%20|\+)product/);
  });
});

test.describe('Header - Cart', () => {
  test('should display cart badge with count', async ({ page }) => {
    await page.goto('/');

    const cartButton = page.locator('[aria-label*="Shopping cart"]');
    await expect(cartButton).toBeVisible();

    // Check for badge
    const badge = cartButton.locator('.MuiBadge-badge');
    await expect(badge).toBeVisible();
  });

  test('should navigate to cart page on click', async ({ page }) => {
    await page.goto('/');

    const cartButton = page.locator('[aria-label*="Shopping cart"]');
    await cartButton.click();

    await expect(page).toHaveURL(/\/cart/);
  });
});
