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
│  ├─ language-context.tsx
│  ├─ navbar.tsx            # modern header: glass, hide-on-scroll, progress
│  ├─ hero.tsx
│  ├─ partners.tsx
│  ├─ features.tsx
│  ├─ ai-section.tsx
│  ├─ stats.tsx
│  ├─ pricing.tsx
│  ├─ cta.tsx
│  └─ footer.tsx
├─ public/Phonic-maps-logo.svg (transparent, enlarged h-14)
└─ next.config.ts / tsconfig.json / postcss.config.mjs
```

## Run

```bash
npm install
npm run dev    # http://localhost:3001
npm run build
```

Logo: `public/Phonic-maps-logo.svg` - transparent background, enlarged. PNG/JPG variants also available.
