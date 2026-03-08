# CLAUDE.md

## Project Overview

Minimal single-page personal site for Antonio Riccelli with a terminal/hacker aesthetic. Dark only, monospace, green-on-black.

## Tech Stack

- **Framework**: SvelteKit 2 + Svelte 5, TypeScript (strict)
- **Styling**: TailwindCSS 3 (no component library)
- **Build**: Vite 5, PostCSS, Autoprefixer
- **Deploy**: Netlify (adapter-netlify)
- **Testing**: Vitest (unit), Playwright (E2E)
- **Linting**: ESLint 9 (flat config) + Prettier

## Commands

```bash
npm run dev          # Dev server
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Type-check with svelte-check
npm run lint         # Prettier check + ESLint
npm run format       # Auto-format with Prettier
npm run test         # All tests
npm run test:unit    # Vitest unit tests
npm run test:integration  # Playwright E2E tests
```

## Project Structure

```
src/
├── app.css              # Global styles (Tailwind, blink animation, terminal defaults)
├── app.html             # Root HTML template
└── routes/
    ├── +layout.svelte   # Minimal layout (just imports app.css)
    └── +page.svelte     # Single page: photo, name, roles, LinkedIn link
static/images/           # Profile picture (pp-4.webp)
tests/                   # Playwright E2E tests
```

## Conventions

- **Indentation**: Tabs (not spaces)
- **Quotes**: Single quotes
- **Trailing commas**: None
- **Print width**: 100 characters
- **Theme**: Always dark — no light mode or toggle
- **Colors**: Terminal green (#00ff41) on black, gray for secondary text
- **Font**: System monospace (`font-mono`)
