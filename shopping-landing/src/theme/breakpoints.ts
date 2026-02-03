import type { BreakpointsOptions } from '@mui/material';

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,      // Mobile start
    sm: 768,    // Tablet start
    md: 1024,   // Desktop start
    lg: 1280,   // Large desktop
    xl: 1920,   // Extra large
  },
};

// Helper for responsive product grid
export const PRODUCTS_PER_VIEWPORT = {
  xs: 2,  // Mobile: 2 products
  sm: 4,  // Tablet: 4 products
  md: 8,  // Desktop: 8 products (2 rows of 4)
  lg: 8,
  xl: 8,
} as const;
