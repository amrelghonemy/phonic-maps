# Phonic Maps — Landing (Next.js 15 + Tailwind 4)

Converted from single-file Tailwind CDN prototype to production Next.js App Router project.

## Structure

```
phonic-maps/
├─ app/
│  ├─ layout.tsx   # fonts (Cairo/Inter), metadata, globals, Font Awesome CDN
│  ├─ globals.css  # @import tailwindcss + custom theme + animations
│  └─ page.tsx     # composes all sections via <LanguageProvider>
├─ components/
│  ├─ language-context.tsx  # ar/en state, dir toggle, geo flag (ipapi.co) with timeout
│  ├─ navbar.tsx            # scroll-aware, mobile menu, accessible
│  ├─ hero.tsx              # gradient text, blob animation, next/image
│  ├─ partners.tsx
│  ├─ features.tsx          # 6 hover-expand cards
│  ├─ ai-section.tsx        # NLP demo + live reply simulation
│  ├─ stats.tsx
│  ├─ pricing.tsx           # monthly/yearly toggle (fixed: original was dead UI)
│  ├─ cta.tsx               # validated email form with success/error states
│  └─ footer.tsx
├─ public/
│  └─ Phonic-maps-logo.jpg  # ← add your logo here (fallback text if missing)
├─ legacy-single-file.html  # original prototype preserved
└─ next.config.ts / tsconfig.json / postcss.config.mjs
```

## Fixes vs original HTML

- **Build**: Tailwind CDN → compiled Tailwind 4 (`@tailwindcss/postcss`), no runtime `tailwind.config` script.
- **Fonts**: Google Fonts `<link>` → `next/font` (Cairo + Inter) with `display:swap`.
- **i18n**: `html[lang] .en/.ar {display:none}` duplication kept but driven by React state + `localStorage` + `document.documentElement.lang/dir` instead of direct DOM. Geo flag `ipapi.co` now has AbortController timeout + fallback to 🇸🇦.
- **Pricing toggle**: was static HTML → now functional `useState(yearly)` with 20% annual math and `role="switch"`.
- **CTA form**: `type="button"` with no handler → `onSubmit` with regex validation, sr-only label, success/error feedback.
- **A11y**: added `aria-label`, `aria-expanded`, `aria-controls`, focus rings, semantic `<main>`/`<nav>`/`<section>`.
- **Images**: Unsplash via `<img>` → `next/image` with `remotePatterns` + `priority` + hover scale. Logo has `onError` fallback to text.
- **SEO**: `layout.tsx` exports `metadata` (title, description, openGraph). Added `html` lang/dir hydration guard.
- **Scroll**: navbar `window.scrollY` listener with cleanup; IntersectionObserver removed in favor of CSS `fade-in-up` (simpler, no fragile `section > div:not(.hero-bg > div)` selector).
- **Tracing**: `outputFileTracingRoot` set to silence Next workspace warning.

## Run

```bash
cd "phonic-maps"
npm install
npm run dev    # http://localhost:3000
npm run build  # production build (verified)
```

Add your logo: copy `Phonic-maps-logo.jpg` into `public/`. If missing, a text fallback `PhonicMaps` appears.

## Deploy

Vercel (connected): `vercel` from this folder or push to GitHub and import.

