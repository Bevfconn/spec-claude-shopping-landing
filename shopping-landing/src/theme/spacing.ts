// 8px grid system
// MUI default spacing is 8px, so we use the multiplier
// spacing(1) = 8px, spacing(2) = 16px, etc.

export const SPACING_UNIT = 8;

// Common spacing values following 8px grid
export const spacing = {
  xs: 1, // 8px
  sm: 2, // 16px
  md: 3, // 24px
  lg: 4, // 32px
  xl: 5, // 40px
  xxl: 6, // 48px
  section: 8, // 64px - vertical rhythm between sections
  sectionLarge: 10, // 80px
} as const;

// Section vertical spacing
export const sectionSpacing = {
  paddingY: { xs: 6, md: 8 }, // 48px mobile, 64px desktop
  gap: { xs: 4, md: 6 }, // 32px mobile, 48px desktop
} as const;
