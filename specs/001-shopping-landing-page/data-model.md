# Data Model: Shopping Website Landing Page

**Feature**: 001-shopping-landing-page
**Date**: 2026-02-03

## Entity Overview

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   HeroContent   │     │     Product     │     │    Category     │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id              │     │ id              │     │ id              │
│ headline        │     │ name            │     │ name            │
│ description     │     │ imageUrl        │     │ imageUrl        │
│ ctaText         │     │ price           │     │ link            │
│ ctaLink         │     │ originalPrice?  │     └─────────────────┘
│ backgroundImage │     │ link            │
└─────────────────┘     └─────────────────┘

┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Promotion    │     │   Testimonial   │     │ NavigationItem  │
├─────────────────┤     ├─────────────────┤     ├─────────────────┤
│ id              │     │ id              │     │ id              │
│ headline        │     │ customerName    │     │ label           │
│ description     │     │ rating (1-5)    │     │ link            │
│ ctaText         │     │ reviewText      │     │ children?       │
│ ctaLink         │     │ avatarUrl?      │     │ order           │
│ imageUrl        │     └─────────────────┘     └─────────────────┘
│ validUntil?     │
└─────────────────┘

┌─────────────────┐
│   FooterLink    │
├─────────────────┤
│ id              │
│ label           │
│ url             │
│ section         │
└─────────────────┘
```

## Entity Definitions

### HeroContent

Primary landing page hero section content.

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| id | string | Yes | UUID format | Unique identifier |
| headline | string | Yes | 1-100 chars | Main headline text |
| description | string | Yes | 1-300 chars | Supporting description |
| ctaText | string | Yes | 1-30 chars | Call-to-action button text |
| ctaLink | string | Yes | Valid URL/path | CTA destination |
| backgroundImageUrl | string | Yes | Valid URL | Hero background image |

**TypeScript Interface**:
```typescript
interface HeroContent {
  id: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImageUrl: string;
}
```

---

### Product

Featured product displayed in the landing page grid.

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| id | string | Yes | UUID format | Unique identifier |
| name | string | Yes | 1-100 chars | Product name |
| imageUrl | string | Yes | Valid URL | Product image |
| price | number | Yes | >= 0 | Current price in cents |
| originalPrice | number | No | >= price | Original price for sales |
| link | string | Yes | Valid URL/path | Product detail page |

**Validation Rules**:
- If `originalPrice` exists, it must be greater than `price` (indicates sale)
- Price displayed as currency with 2 decimal places

**TypeScript Interface**:
```typescript
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  link: string;
}
```

---

### Category

Product category for browsing navigation.

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| id | string | Yes | UUID format | Unique identifier |
| name | string | Yes | 1-50 chars | Category name |
| imageUrl | string | Yes | Valid URL | Category image |
| link | string | Yes | Valid URL/path | Category page |

**TypeScript Interface**:
```typescript
interface Category {
  id: string;
  name: string;
  imageUrl: string;
  link: string;
}
```

---

### Promotion

Promotional banner or section content.

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| id | string | Yes | UUID format | Unique identifier |
| headline | string | Yes | 1-80 chars | Promotion headline |
| description | string | Yes | 1-200 chars | Promotion details |
| ctaText | string | Yes | 1-30 chars | Action button text |
| ctaLink | string | Yes | Valid URL/path | Promotion destination |
| imageUrl | string | Yes | Valid URL | Promotional image |
| validUntil | string | No | ISO 8601 date | Expiration timestamp |

**State Transitions**:
- Active: `validUntil` is null or in the future
- Expired: `validUntil` is in the past → hide from display

**TypeScript Interface**:
```typescript
interface Promotion {
  id: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  validUntil?: string; // ISO 8601
}
```

---

### Testimonial

Customer review/testimonial content.

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| id | string | Yes | UUID format | Unique identifier |
| customerName | string | Yes | 1-50 chars | Customer display name |
| rating | number | Yes | 1-5, integer | Star rating |
| reviewText | string | Yes | 1-500 chars | Review content |
| avatarUrl | string | No | Valid URL | Customer avatar image |

**Display Rules**:
- If `avatarUrl` is missing, display default avatar placeholder
- Rating displayed as filled/empty stars

**TypeScript Interface**:
```typescript
interface Testimonial {
  id: string;
  customerName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  reviewText: string;
  avatarUrl?: string;
}
```

---

### NavigationItem

Navigation menu structure with optional nested items.

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| id | string | Yes | UUID format | Unique identifier |
| label | string | Yes | 1-30 chars | Display label |
| link | string | Yes | Valid URL/path | Navigation destination |
| children | NavigationItem[] | No | Max depth: 1 | Dropdown sub-items |
| order | number | Yes | >= 0 | Display order |

**Display Rules**:
- Items sorted by `order` ascending
- If `children` exists, render as dropdown on hover/click
- Maximum one level of nesting (simple dropdown per clarification)

**TypeScript Interface**:
```typescript
interface NavigationItem {
  id: string;
  label: string;
  link: string;
  children?: NavigationItem[];
  order: number;
}
```

---

### FooterLink

Footer section link item.

| Field | Type | Required | Validation | Description |
|-------|------|----------|------------|-------------|
| id | string | Yes | UUID format | Unique identifier |
| label | string | Yes | 1-40 chars | Link display text |
| url | string | Yes | Valid URL/path | Link destination |
| section | FooterSection | Yes | Enum value | Grouping section |

**Section Enum**:
```typescript
type FooterSection = 'about' | 'support' | 'legal' | 'social';
```

**TypeScript Interface**:
```typescript
interface FooterLink {
  id: string;
  label: string;
  url: string;
  section: FooterSection;
}
```

---

## UI State Entities

### CartState (UI-only)

| Field | Type | Description |
|-------|------|-------------|
| itemCount | number | Number of items in cart |

**Display Rules**:
- If `itemCount` > 99, display "99+"
- If `itemCount` === 0, hide badge

---

### NewsletterFormState (UI-only)

| Field | Type | Description |
|-------|------|-------------|
| email | string | User input email |
| status | 'idle' \| 'submitting' \| 'success' \| 'error' | Form submission state |
| errorMessage | string \| null | Validation/submission error |

**Validation Rules**:
- Email must match RFC 5322 email format
- Error message: "Please enter a valid email address"

---

## Data Volume Assumptions

| Entity | Expected Count | Notes |
|--------|---------------|-------|
| HeroContent | 1 | Single hero per page |
| Products | 8-12 | 8 displayed, buffer for variety |
| Categories | 4-8 | Grid display |
| Promotions | 1-3 | Primary + optional secondary |
| Testimonials | 3-6 | Carousel or grid |
| NavigationItems | 5-8 | Top-level items |
| FooterLinks | 15-25 | Across all sections |
