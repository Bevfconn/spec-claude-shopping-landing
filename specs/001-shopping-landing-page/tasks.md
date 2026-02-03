# Tasks: Shopping Website Landing Page

**Input**: Design documents from `/specs/001-shopping-landing-page/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Tests are included as this is a frontend project requiring component and E2E testing per plan.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Vite project with React + TypeScript template using `npm create vite@latest`
- [x] T002 Install MUI dependencies: @mui/material, @mui/icons-material, @emotion/react, @emotion/styled
- [x] T003 [P] Install React Router v6: react-router-dom
- [x] T004 [P] Install testing dependencies: jest, @testing-library/react, @testing-library/jest-dom, @testing-library/user-event, jest-environment-jsdom
- [x] T005 [P] Install Playwright for E2E: @playwright/test, @axe-core/playwright
- [x] T006 [P] Install dev dependencies: @types/node, ts-jest
- [x] T007 Create project directory structure per plan.md (src/components, src/hooks, src/data, src/theme, src/types, src/utils, src/pages, tests/e2e, public/images/placeholders)
- [x] T008 [P] Configure vite.config.ts with path aliases (@/)
- [x] T009 [P] Configure tsconfig.json with path aliases and strict mode
- [x] T010 [P] Configure jest.config.ts for React Testing Library
- [x] T011 [P] Configure playwright.config.ts for E2E tests
- [x] T012 Create tests/setup.ts with jest-dom imports

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

### TypeScript Types

- [x] T013 [P] Create HeroContent interface in src/types/hero.ts
- [x] T014 [P] Create Product interface in src/types/product.ts
- [x] T015 [P] Create Category interface in src/types/category.ts
- [x] T016 [P] Create Promotion interface in src/types/promotion.ts
- [x] T017 [P] Create Testimonial interface in src/types/testimonial.ts
- [x] T018 [P] Create NavigationItem interface in src/types/navigation.ts
- [x] T019 Create barrel export in src/types/index.ts consolidating all types

### MUI Theme Configuration

- [x] T020 [P] Create color palette in src/theme/palette.ts with primary/secondary colors and WCAG AA compliant contrast ratios
- [x] T021 [P] Create typography scale in src/theme/typography.ts with h1-h6, body1, body2 following 8px grid
- [x] T022 [P] Create spacing utilities in src/theme/spacing.ts based on 8px grid system
- [x] T023 [P] Create breakpoints in src/theme/breakpoints.ts (xs:0, sm:768, md:1024, lg:1280, xl:1920)
- [x] T024 Create main theme in src/theme/index.ts combining palette, typography, spacing, breakpoints with MUI component overrides

### Utility Functions

- [x] T025 [P] Create formatPrice utility in src/utils/formatPrice.ts (converts cents to formatted currency string)
- [x] T026 [P] Create truncateText utility in src/utils/truncateText.ts (truncates with ellipsis at max chars/lines)
- [x] T027 [P] Create validateEmail utility in src/utils/validateEmail.ts (RFC 5322 email validation)

### Custom Hooks

- [x] T028 [P] Create useBreakpoint hook in src/hooks/useBreakpoint.ts (returns current breakpoint using MUI useMediaQuery)
- [x] T029 [P] Create useReducedMotion hook in src/hooks/useReducedMotion.ts (detects prefers-reduced-motion)
- [x] T030 [P] Create useToast hook in src/hooks/useToast.ts (manages toast notification state)
- [x] T031 Create useMockData hook in src/hooks/useMockData.ts (loads and returns mock JSON data with loading/error states)

### Common Components

- [x] T032 [P] Create LoadingSkeleton component in src/components/common/LoadingSkeleton.tsx (skeleton states for cards, text, images)
- [x] T033 [P] Create ErrorState component in src/components/common/ErrorState.tsx (error message with retry button)
- [x] T034 [P] Create EmptyState component in src/components/common/EmptyState.tsx (empty content placeholder with message)
- [x] T035 [P] Create Toast component in src/components/common/Toast.tsx (success/error/info notifications with auto-dismiss)
- [x] T036 Create ImageWithFallback component in src/components/common/ImageWithFallback.tsx (image with onError fallback, lazy loading, alt text)

### Mock Data Files

- [x] T037 [P] Create heroContent.json in src/data/heroContent.json with sample hero content
- [x] T038 [P] Create products.json in src/data/products.json with 10 sample products (8+ required for display)
- [x] T039 [P] Create categories.json in src/data/categories.json with 6 sample categories
- [x] T040 [P] Create promotions.json in src/data/promotions.json with 2 sample promotions
- [x] T041 [P] Create testimonials.json in src/data/testimonials.json with 4 sample testimonials
- [x] T042 [P] Create navigation.json in src/data/navigation.json with 6 navigation items including dropdowns
- [x] T043 [P] Create footerLinks.json in src/data/footerLinks.json with links for about, support, legal, social sections

### Placeholder Assets

- [x] T044 [P] Create product-placeholder.svg in public/images/placeholders/product-placeholder.svg
- [x] T045 [P] Create category-placeholder.svg in public/images/placeholders/category-placeholder.svg
- [x] T046 [P] Create avatar-placeholder.svg in public/images/placeholders/avatar-placeholder.svg

### App Shell

- [x] T047 Configure ThemeProvider and CssBaseline in src/App.tsx
- [x] T048 Setup React Router with BrowserRouter in src/main.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - First-Time Visitor Discovers Products (Priority: P1) 🎯 MVP

**Goal**: Visitor lands on page, sees hero with value proposition, discovers featured products and categories

**Independent Test**: Navigate to landing page URL, verify hero section displays within 3 seconds, scroll to see products grid (8/4/2 responsive), click product to navigate

### Tests for User Story 1

- [ ] T049 [P] [US1] Create Hero component test in src/components/sections/Hero/Hero.test.tsx (renders headline, description, CTA, background image)
- [ ] T050 [P] [US1] Create FeaturedProducts component test in src/components/sections/FeaturedProducts/FeaturedProducts.test.tsx (renders correct product count per viewport, handles empty/error states)
- [ ] T051 [P] [US1] Create Categories component test in src/components/sections/Categories/Categories.test.tsx (renders category grid, handles empty state)
- [ ] T052 [US1] Create E2E test in tests/e2e/landing-page.spec.ts (page load, hero visibility, scroll to products, product click navigation)

### Implementation for User Story 1

- [x] T053 [P] [US1] Create Hero section component in src/components/sections/Hero/Hero.tsx (full-width hero with background image, headline, description, CTA button, responsive padding)
- [x] T054 [P] [US1] Create ProductCard component in src/components/sections/FeaturedProducts/ProductCard.tsx (image with fallback, name truncation, price/sale price, hover state, click navigation)
- [x] T055 [US1] Create FeaturedProducts section in src/components/sections/FeaturedProducts/FeaturedProducts.tsx (responsive grid 8/4/2, loading skeletons, error state, empty state)
- [x] T056 [P] [US1] Create CategoryCard component in src/components/sections/Categories/CategoryCard.tsx (image with fallback, category name, hover state, click navigation)
- [x] T057 [US1] Create Categories section in src/components/sections/Categories/Categories.tsx (responsive grid, loading skeletons, empty state handling)
- [x] T058 [US1] Create initial LandingPage in src/pages/LandingPage.tsx assembling Hero, FeaturedProducts, Categories sections with consistent vertical spacing

**Checkpoint**: User Story 1 complete - visitor can discover products and categories independently

---

## Phase 4: User Story 2 - Visitor Navigates to Key Sections (Priority: P2)

**Goal**: Visitor can use header navigation to browse site sections, access search, cart, and account

**Independent Test**: Verify header displays logo, nav menu, icons; test dropdown on hover/click; test mobile drawer; verify keyboard navigation

### Tests for User Story 2

- [ ] T059 [P] [US2] Create Header component test in src/components/layout/Header/Header.test.tsx (sticky header, all elements visible, responsive collapse)
- [ ] T060 [P] [US2] Create Navigation component test in src/components/layout/Header/Navigation.test.tsx (dropdown on hover/click, keyboard navigation, close on escape)
- [ ] T061 [P] [US2] Create MobileDrawer component test in src/components/layout/Header/MobileDrawer.test.tsx (opens on hamburger click, displays all items, closes on selection)
- [ ] T062 [US2] Create navigation E2E test in tests/e2e/navigation.spec.ts (desktop dropdown, mobile drawer, keyboard accessibility)

### Implementation for User Story 2

- [ ] T063 [P] [US2] Create CartBadge component in src/components/layout/Header/CartBadge.tsx (badge with count, "99+" overflow, hidden when 0)
- [ ] T064 [P] [US2] Create SearchBar component in src/components/layout/Header/SearchBar.tsx (icon button, expandable input field, close on blur)
- [ ] T065 [US2] Create Navigation component in src/components/layout/Header/Navigation.tsx (horizontal menu, simple dropdown on hover/click, keyboard nav support)
- [ ] T066 [US2] Create MobileDrawer component in src/components/layout/Header/MobileDrawer.tsx (MUI Drawer, full navigation tree, close on selection)
- [ ] T067 [US2] Create Header component in src/components/layout/Header/Header.tsx (sticky, logo, Navigation/MobileDrawer responsive, SearchBar, CartBadge, account icon)
- [ ] T068 [US2] Update LandingPage in src/pages/LandingPage.tsx to include Header at top with proper spacing

**Checkpoint**: User Story 2 complete - visitor can navigate the site independently

---

## Phase 5: User Story 3 - Visitor Views Promotional Content (Priority: P2)

**Goal**: Visitor sees active promotions/offers that encourage action and purchases

**Independent Test**: Verify promotional banner displays with headline, description, CTA; verify expired promotions are hidden; test responsive display

### Tests for User Story 3

- [ ] T069 [P] [US3] Create PromoBanner component test in src/components/sections/Promotions/PromoBanner.test.tsx (renders all fields, handles missing data, CTA click)
- [ ] T070 [P] [US3] Create Promotions section test in src/components/sections/Promotions/Promotions.test.tsx (renders active promos, hides expired, graceful error handling)

### Implementation for User Story 3

- [ ] T071 [P] [US3] Create PromoBanner component in src/components/sections/Promotions/PromoBanner.tsx (image background, headline, description, CTA button, responsive layout)
- [ ] T072 [US3] Create Promotions section in src/components/sections/Promotions/Promotions.tsx (filters expired promotions, displays active, gracefully hides on error/empty)
- [ ] T073 [US3] Update LandingPage in src/pages/LandingPage.tsx to include Promotions section between Hero and FeaturedProducts

**Checkpoint**: User Story 3 complete - visitor sees promotional content independently

---

## Phase 6: User Story 4 - Visitor Builds Trust Through Social Proof (Priority: P3)

**Goal**: Visitor sees customer testimonials and trust indicators that build purchase confidence

**Independent Test**: Verify testimonials display with ratings, names, reviews; verify avatar fallback; test trust badges visibility

### Tests for User Story 4

- [ ] T074 [P] [US4] Create TestimonialCard component test in src/components/sections/Testimonials/TestimonialCard.test.tsx (renders all fields, star rating, avatar fallback)
- [ ] T075 [P] [US4] Create Testimonials section test in src/components/sections/Testimonials/Testimonials.test.tsx (renders testimonial grid, handles empty state, graceful error handling)

### Implementation for User Story 4

- [ ] T076 [P] [US4] Create TestimonialCard component in src/components/sections/Testimonials/TestimonialCard.tsx (avatar with fallback, customer name, star rating component, review text truncation)
- [ ] T077 [US4] Create Testimonials section in src/components/sections/Testimonials/Testimonials.tsx (responsive grid/carousel, loading skeletons, gracefully hides on error)
- [ ] T078 [US4] Update LandingPage in src/pages/LandingPage.tsx to include Testimonials section after Categories

**Checkpoint**: User Story 4 complete - visitor sees social proof independently

---

## Phase 7: User Story 5 - Visitor Accesses Footer Information (Priority: P3)

**Goal**: Visitor can access company info, policies, social links, and subscribe to newsletter

**Independent Test**: Verify footer displays all link sections; test newsletter validation and submission feedback; verify all links work

### Tests for User Story 5

- [ ] T079 [P] [US5] Create FooterLinks component test in src/components/layout/Footer/FooterLinks.test.tsx (renders grouped links, all links clickable)
- [ ] T080 [P] [US5] Create NewsletterForm component test in src/components/layout/Footer/NewsletterForm.test.tsx (email validation, submit success/error feedback, input clearing)
- [ ] T081 [P] [US5] Create SocialLinks component test in src/components/layout/Footer/SocialLinks.test.tsx (renders social icons, opens in new tab)
- [ ] T082 [P] [US5] Create Footer component test in src/components/layout/Footer/Footer.test.tsx (all sections present, copyright visible)

### Implementation for User Story 5

- [ ] T083 [P] [US5] Create FooterLinks component in src/components/layout/Footer/FooterLinks.tsx (columns for about, support, legal sections with links)
- [ ] T084 [P] [US5] Create SocialLinks component in src/components/layout/Footer/SocialLinks.tsx (social media icons with external links)
- [ ] T085 [US5] Create NewsletterForm component in src/components/layout/Footer/NewsletterForm.tsx (email input, validation, submit button, success/error toast integration)
- [ ] T086 [US5] Create Footer component in src/components/layout/Footer/Footer.tsx (FooterLinks, NewsletterForm, SocialLinks, copyright, responsive layout)
- [ ] T087 [US5] Update LandingPage in src/pages/LandingPage.tsx to include Footer at bottom

**Checkpoint**: User Story 5 complete - visitor can access footer info independently

---

## Phase 8: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

### Accessibility

- [ ] T088 [P] Create accessibility E2E test in tests/e2e/accessibility.spec.ts (axe-core audit on landing page, all viewports)
- [ ] T089 [P] Add skip-to-main-content link in src/App.tsx for keyboard users
- [ ] T090 Audit and fix focus indicators across all interactive elements
- [ ] T091 Verify color contrast meets WCAG AA across all components
- [ ] T092 Test keyboard navigation flow through entire page

### Performance & Error Handling

- [ ] T093 [P] Implement reduced-motion support across all animated components using useReducedMotion hook
- [ ] T094 Verify lazy loading works for all below-fold images
- [ ] T095 Add error boundaries around each section for graceful degradation
- [ ] T096 Test all error states render correctly (network failure, missing data)

### Cross-Browser Testing

- [ ] T097 Test landing page in Chrome (latest 2 versions)
- [ ] T098 [P] Test landing page in Firefox (latest 2 versions)
- [ ] T099 [P] Test landing page in Safari (latest 2 versions)
- [ ] T100 [P] Test landing page in Edge (latest 2 versions)

### Final Validation

- [ ] T101 Run full E2E test suite across all viewports (320px, 768px, 1024px, 1920px)
- [ ] T102 Verify 8px grid alignment with pixel-perfect review
- [ ] T103 Run Lighthouse audit (performance, accessibility, best practices)
- [ ] T104 Validate against quickstart.md setup instructions

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-7)**: All depend on Foundational phase completion
  - User stories can proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Phase 8)**: Depends on all desired user stories being complete

### User Story Dependencies

| Story | Priority | Dependencies | Can Parallelize With |
|-------|----------|--------------|---------------------|
| US1 (Products) | P1 | Foundational only | - |
| US2 (Navigation) | P2 | Foundational only | US1, US3 |
| US3 (Promotions) | P2 | Foundational only | US1, US2 |
| US4 (Testimonials) | P3 | Foundational only | US1, US2, US3, US5 |
| US5 (Footer) | P3 | Foundational only | US1, US2, US3, US4 |

### Within Each User Story

1. Tests FIRST - write and verify they fail
2. Atomic components (Cards, Buttons)
3. Section components (grids, layouts)
4. LandingPage integration
5. Verify tests pass

---

## Parallel Execution Examples

### Phase 2: Foundational (Maximum Parallelism)

```bash
# All type definitions in parallel:
T013 src/types/hero.ts
T014 src/types/product.ts
T015 src/types/category.ts
T016 src/types/promotion.ts
T017 src/types/testimonial.ts
T018 src/types/navigation.ts

# All theme files in parallel:
T020 src/theme/palette.ts
T021 src/theme/typography.ts
T022 src/theme/spacing.ts
T023 src/theme/breakpoints.ts

# All utilities in parallel:
T025 src/utils/formatPrice.ts
T026 src/utils/truncateText.ts
T027 src/utils/validateEmail.ts

# All hooks in parallel:
T028 src/hooks/useBreakpoint.ts
T029 src/hooks/useReducedMotion.ts
T030 src/hooks/useToast.ts

# All common components in parallel:
T032 src/components/common/LoadingSkeleton.tsx
T033 src/components/common/ErrorState.tsx
T034 src/components/common/EmptyState.tsx
T035 src/components/common/Toast.tsx

# All mock data files in parallel:
T037 src/data/heroContent.json
T038 src/data/products.json
T039 src/data/categories.json
T040 src/data/promotions.json
T041 src/data/testimonials.json
T042 src/data/navigation.json
T043 src/data/footerLinks.json
```

### User Story 1 (MVP) Parallelism

```bash
# Tests first (parallel):
T049 Hero.test.tsx
T050 FeaturedProducts.test.tsx
T051 Categories.test.tsx

# Then atomic components (parallel):
T053 Hero.tsx
T054 ProductCard.tsx
T056 CategoryCard.tsx

# Then sections (after their cards):
T055 FeaturedProducts.tsx (needs T054)
T057 Categories.tsx (needs T056)

# Finally integration:
T058 LandingPage.tsx (needs all above)
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T012)
2. Complete Phase 2: Foundational (T013-T048)
3. Complete Phase 3: User Story 1 (T049-T058)
4. **STOP and VALIDATE**: Landing page shows Hero + Products + Categories
5. Deploy/demo MVP

### Incremental Delivery

| Increment | Stories Included | Value Delivered |
|-----------|-----------------|-----------------|
| MVP | US1 | Product discovery |
| +Nav | US1 + US2 | Site navigation |
| +Promos | US1 + US2 + US3 | Promotional content |
| +Trust | US1-4 | Social proof |
| Complete | US1-5 | Full landing page |

### Suggested MVP Scope

**Minimum**: User Story 1 (Hero + Featured Products + Categories)
- Delivers core product discovery value
- 58 tasks to functional MVP
- Can be demoed and tested independently

---

## Summary

| Phase | Task Count | Parallel Opportunities |
|-------|------------|----------------------|
| Setup | 12 | 8 tasks parallelizable |
| Foundational | 36 | 28 tasks parallelizable |
| US1 (P1 MVP) | 10 | 6 tasks parallelizable |
| US2 (P2) | 10 | 6 tasks parallelizable |
| US3 (P2) | 5 | 3 tasks parallelizable |
| US4 (P3) | 5 | 3 tasks parallelizable |
| US5 (P3) | 9 | 5 tasks parallelizable |
| Polish | 17 | 10 tasks parallelizable |
| **Total** | **104** | **69 parallelizable** |

---

## Notes

- [P] tasks = different files, no dependencies - can run in parallel
- [Story] label (US1-US5) maps task to specific user story for traceability
- Each user story is independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- All components use MUI sx prop for pixel-perfect styling on 8px grid
