/**
 * TypeScript Type Definitions for Shopping Landing Page
 * Feature: 001-shopping-landing-page
 * Generated: 2026-02-03
 */

// ============================================================================
// Core Entity Types
// ============================================================================

/**
 * Hero section content
 */
export interface HeroContent {
  id: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImageUrl: string;
}

/**
 * Featured product card data
 */
export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  /** Price in cents */
  price: number;
  /** Original price for sale items (in cents) */
  originalPrice?: number;
  link: string;
}

/**
 * Product category
 */
export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}

/**
 * Promotional banner/section
 */
export interface Promotion {
  id: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  /** ISO 8601 date string */
  validUntil?: string;
}

/**
 * Customer testimonial/review
 */
export interface Testimonial {
  id: string;
  customerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewText: string;
  avatarUrl?: string;
}

/**
 * Navigation menu item (supports one level of nesting)
 */
export interface NavigationItem {
  id: string;
  label: string;
  link: string;
  order: number;
  children?: NavigationItem[];
}

/**
 * Footer link section type
 */
export type FooterSection = 'about' | 'support' | 'legal' | 'social';

/**
 * Footer link item
 */
export interface FooterLink {
  id: string;
  label: string;
  url: string;
  section: FooterSection;
}

// ============================================================================
// UI State Types
// ============================================================================

/**
 * Cart state for badge display
 */
export interface CartState {
  itemCount: number;
}

/**
 * Newsletter form submission status
 */
export type NewsletterStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Newsletter form state
 */
export interface NewsletterFormState {
  email: string;
  status: NewsletterStatus;
  errorMessage: string | null;
}

/**
 * Generic loading state for data fetching
 */
export type LoadingState = 'loading' | 'success' | 'error';

/**
 * Section data with loading state
 */
export interface SectionData<T> {
  data: T | null;
  state: LoadingState;
  error: string | null;
}

// ============================================================================
// Component Props Types
// ============================================================================

/**
 * Product card component props
 */
export interface ProductCardProps {
  product: Product;
  onError?: () => void;
}

/**
 * Category card component props
 */
export interface CategoryCardProps {
  category: Category;
  onError?: () => void;
}

/**
 * Testimonial card component props
 */
export interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * Error state component props
 */
export interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

/**
 * Empty state component props
 */
export interface EmptyStateProps {
  title: string;
  description?: string;
}

/**
 * Image with fallback component props
 */
export interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

/**
 * Toast notification props
 */
export interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

// ============================================================================
// Mock Data File Types
// ============================================================================

/**
 * Complete mock data structure
 */
export interface MockData {
  heroContent: HeroContent;
  products: Product[];
  categories: Category[];
  promotions: Promotion[];
  testimonials: Testimonial[];
  navigation: NavigationItem[];
  footerLinks: FooterLink[];
}

// ============================================================================
// Utility Types
// ============================================================================

/**
 * Breakpoint names matching MUI theme
 */
export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Products per viewport configuration
 */
export interface ProductsPerViewport {
  xs: number; // Mobile: 2
  sm: number; // Tablet: 4
  md: number; // Desktop: 8
  lg: number; // Large: 8
  xl: number; // XL: 8
}

/**
 * Default products per viewport
 */
export const DEFAULT_PRODUCTS_PER_VIEWPORT: ProductsPerViewport = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 8,
  xl: 8,
};
