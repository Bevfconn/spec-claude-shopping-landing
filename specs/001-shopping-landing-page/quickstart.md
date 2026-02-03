# Quickstart: Shopping Website Landing Page

**Feature**: 001-shopping-landing-page
**Date**: 2026-02-03

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher (or pnpm/yarn)
- Git

## Project Setup

### 1. Initialize the Project

```bash
# Create new Vite project with React + TypeScript
npm create vite@latest shopping-landing -- --template react-ts

# Navigate to project
cd shopping-landing

# Install dependencies
npm install
```

### 2. Install MUI and Dependencies

```bash
# MUI core and icons
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

# React Router for navigation
npm install react-router-dom

# Development dependencies
npm install -D @types/node
```

### 3. Install Testing Dependencies

```bash
# Jest and React Testing Library
npm install -D jest @types/jest ts-jest
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install -D jest-environment-jsdom

# Playwright for E2E tests
npm install -D @playwright/test

# Accessibility testing
npm install -D @axe-core/react @axe-core/playwright
```

### 4. Create Project Structure

```bash
# Create component directories
mkdir -p src/components/layout/Header
mkdir -p src/components/layout/Footer
mkdir -p src/components/sections/Hero
mkdir -p src/components/sections/FeaturedProducts
mkdir -p src/components/sections/Categories
mkdir -p src/components/sections/Promotions
mkdir -p src/components/sections/Testimonials
mkdir -p src/components/common

# Create other directories
mkdir -p src/hooks
mkdir -p src/data
mkdir -p src/theme
mkdir -p src/types
mkdir -p src/utils
mkdir -p src/pages

# Create test directories
mkdir -p tests/e2e

# Create public assets
mkdir -p public/images/placeholders
```

### 5. Copy Type Definitions

Copy the TypeScript types from `specs/001-shopping-landing-page/contracts/typescript-types.ts` to `src/types/index.ts`.

## Configuration Files

### vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

### tsconfig.json (add paths)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### jest.config.ts

```typescript
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
};
```

### playwright.config.ts

```typescript
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:5173',
  },
  webServer: {
    command: 'npm run dev',
    port: 5173,
  },
});
```

## MUI Theme Setup

Create `src/theme/index.ts`:

```typescript
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8, // 8px grid system
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
```

## Mock Data Setup

Create sample mock data files in `src/data/`:

### products.json

```json
[
  {
    "id": "prod-1",
    "name": "Premium Wireless Headphones",
    "imageUrl": "https://picsum.photos/seed/prod1/400/400",
    "price": 9999,
    "originalPrice": 14999,
    "link": "/products/prod-1"
  }
]
```

See `specs/001-shopping-landing-page/contracts/mock-data-schema.json` for complete schema definitions.

## Development Commands

```bash
# Start development server
npm run dev

# Run unit tests
npm test

# Run unit tests in watch mode
npm test -- --watch

# Run E2E tests
npx playwright test

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

## Key Implementation Notes

### 1. Responsive Product Grid

Use MUI Grid with responsive columns:

```typescript
<Grid container spacing={3}>
  {products.slice(0, productsToShow).map((product) => (
    <Grid item xs={6} sm={3} md={1.5} key={product.id}>
      <ProductCard product={product} />
    </Grid>
  ))}
</Grid>
```

### 2. Products Per Viewport

```typescript
import { useMediaQuery, useTheme } from '@mui/material';

const useProductCount = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  if (isMobile) return 2;
  if (isTablet) return 4;
  return 8;
};
```

### 3. Image Fallback Component

```typescript
const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
      loading="lazy"
      {...props}
    />
  );
};
```

### 4. Reduced Motion Support

```typescript
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};
```

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA (4.5:1 text, 3:1 large)
- [ ] Focus indicators visible on all interactive elements
- [ ] Keyboard navigation works (Tab, Arrow keys, Enter, Escape)
- [ ] Skip link for main content
- [ ] Semantic HTML structure (header, main, nav, footer)
- [ ] ARIA labels where needed
- [ ] Reduced motion support

## Next Steps

1. Run `/speckit.tasks` to generate implementation tasks
2. Start with P1 user stories (Hero, Featured Products)
3. Implement common components first (LoadingSkeleton, ErrorState)
4. Set up E2E tests early for regression prevention
