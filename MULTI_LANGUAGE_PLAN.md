# Multi-Language Implementation Plan

## Overview
Implement internationalization (i18n) for OMNEX website supporting:
- English (en) - Default
- Arabic (ar)
- Spanish (es)
- Italian (it)
- French (fr)

## Implementation Strategy

### Phase 1: Setup & Configuration

#### 1.1 Install Dependencies
```bash
npm install next-intl
# or
npm install next-i18next
```

**Recommended: `next-intl`** - Better for App Router in Next.js 14

#### 1.2 Project Structure Changes
```
app/
  [locale]/
    about/
    contact/
    products/
    solutions/
    page.tsx
    layout.tsx
  layout.tsx (root)
messages/
  en.json
  ar.json
  es.json
  it.json
  fr.json
```

#### 1.3 Configuration Files
- `next.config.mjs` - Add i18n configuration
- `i18n.ts` or `i18n.config.ts` - Locale configuration
- Middleware for locale detection and routing

### Phase 2: Core Implementation

#### 2.1 Locale Configuration
- Define supported locales
- Set default locale (en)
- Configure locale detection (browser, URL, cookie)
- Handle RTL for Arabic

#### 2.2 Routing Structure
- Dynamic `[locale]` segment in app directory
- Redirect root to default locale
- Locale-aware navigation
- SEO-friendly URLs

#### 2.3 Translation Files Structure
```json
{
  "common": {
    "nav": {...},
    "footer": {...},
    "buttons": {...}
  },
  "home": {...},
  "about": {...},
  "products": {...},
  "contact": {...}
}
```

### Phase 3: Component Updates

#### 3.1 Core Components
- Navigation.tsx - Add language switcher
- Footer.tsx - Translate footer content
- Hero.tsx - Translate hero section
- All section components

#### 3.2 Pages
- Home page
- About page
- Products pages
- Contact page
- Solutions page

### Phase 4: Features

#### 4.1 Language Switcher
- Dropdown/Select component
- Flag icons (optional)
- Current language indicator
- Smooth transitions

#### 4.2 RTL Support (Arabic)
- CSS direction handling
- Layout mirroring
- Text alignment
- Navigation positioning

#### 4.3 SEO & Metadata
- Locale-specific metadata
- hreflang tags
- Sitemap with locales
- Open Graph tags per locale

## Detailed Implementation Steps

### Step 1: Install next-intl
```bash
npm install next-intl
```

### Step 2: Create i18n Configuration
Create `i18n.ts`:
```typescript
export const locales = ['en', 'ar', 'es', 'it', 'fr'] as const;
export const defaultLocale = 'en' as const;
export type Locale = (typeof locales)[number];
```

### Step 3: Restructure App Directory
- Move all routes under `[locale]` folder
- Create root layout with locale provider
- Update all page imports

### Step 4: Create Translation Files
- JSON files for each locale
- Organize by feature/page
- Include all text content

### Step 5: Update Components
- Replace hardcoded text with `useTranslations()`
- Add language switcher to Navigation
- Handle RTL in layout

### Step 6: Middleware Setup
- Detect locale from URL/headers
- Redirect to appropriate locale
- Handle locale switching

### Step 7: Testing
- Test all locales
- Verify RTL for Arabic
- Check SEO metadata
- Test language switching

## File Structure After Implementation

```
app/
  [locale]/
    layout.tsx
    page.tsx
    about/
      page.tsx
    contact/
      page.tsx
    products/
      page.tsx
      [slug]/
        page.tsx
    solutions/
      page.tsx
  layout.tsx
  globals.css
messages/
  en/
    common.json
    home.json
    about.json
    products.json
    contact.json
  ar/
    common.json
    home.json
    ...
  es/
  it/
  fr/
components/
  Navigation.tsx
  LanguageSwitcher.tsx
  ...
i18n.ts
middleware.ts
next.config.mjs
```

## Considerations

### Arabic (RTL)
- Right-to-left text direction
- Mirror navigation and layouts
- Adjust padding/margins
- Font selection for Arabic

### SEO
- Each locale needs unique URLs
- hreflang tags for all pages
- Locale-specific sitemaps
- Meta descriptions per locale

### Performance
- Lazy load translations
- Code splitting per locale
- Optimize bundle size

### Content Management
- Translation workflow
- Content updates process
- Version control for translations

## Timeline Estimate
- Phase 1 (Setup): 2-3 hours
- Phase 2 (Core): 4-6 hours
- Phase 3 (Components): 6-8 hours
- Phase 4 (Features): 3-4 hours
- Testing & Refinement: 2-3 hours

**Total: ~17-24 hours**

## Next Steps
1. Review and approve this plan
2. Install dependencies
3. Start with Phase 1 implementation
4. Iterate through phases
5. Test thoroughly before deployment


