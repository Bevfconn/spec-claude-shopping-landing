export interface Promotion {
  id: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  /** ISO 8601 date string for expiration */
  validUntil?: string;
}
