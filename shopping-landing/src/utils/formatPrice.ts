/**
 * Converts price in cents to formatted currency string
 * @param cents - Price in cents
 * @param currency - Currency code (default: USD)
 * @param locale - Locale for formatting (default: en-US)
 * @returns Formatted price string (e.g., "$99.99")
 */
export function formatPrice(
  cents: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string {
  const dollars = cents / 100;
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(dollars);
}

/**
 * Checks if a product is on sale
 * @param price - Current price in cents
 * @param originalPrice - Original price in cents (optional)
 * @returns True if product is on sale
 */
export function isOnSale(price: number, originalPrice?: number): boolean {
  return originalPrice !== undefined && originalPrice > price;
}

/**
 * Calculates discount percentage
 * @param price - Current price in cents
 * @param originalPrice - Original price in cents
 * @returns Discount percentage (e.g., 25 for 25% off)
 */
export function calculateDiscount(price: number, originalPrice: number): number {
  if (originalPrice <= 0) return 0;
  const discount = ((originalPrice - price) / originalPrice) * 100;
  return Math.round(discount);
}
