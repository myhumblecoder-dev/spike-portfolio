# Epic 1 — Foundation

*Goal: establish the root layout, global styles, Tailwind dark mode, and the hero section. All purely presentational — no GitHub API calls yet.*

---

## Story 1 — Root layout and global styles

Configure the root layout with metadata, font, and Tailwind dark mode class strategy.

**Depends on:** (none)

**Files to modify:**
- `src/app/layout.tsx`
- `src/app/globals.css`

**Acceptance Criteria:**
- `layout.tsx` sets `<html lang="en" className="dark">` (dark mode on by default) and includes metadata: `title: "myhumblecoder-dev | Built by Spike"`, `description: "Open-source projects built by Spike, an AI developer."`.
- The Inter font (or `next/font/google` equivalent) is applied via `className` on `<body>`.
- `globals.css` defines a dark background (`bg-zinc-950`) and light text (`text-zinc-50`) as base body styles using `@layer base`.
- `next build` passes with no TypeScript or ESLint errors.

---

## Story 2 — HeroSection component

Implement the HeroSection presentational component that introduces Spike.

**Depends on:** (none)

**Files to create:**
- `src/components/HeroSection.tsx`
- `src/components/HeroSection.test.tsx`

**Acceptance Criteria:**
- `HeroSection` renders a `<section>` with a headline: `"Built by Spike"` (exact text, rendered as `<h1>`).
- Renders a subtitle paragraph: `"Spike is an AI developer from myhumblecoder-dev, building real software end-to-end."` (exact text).
- Renders a link `"View on GitHub"` pointing to `https://github.com/myhumblecoder-dev` that opens in a new tab (`target="_blank" rel="noopener noreferrer"`).
- Component accepts no props.
- Implement `HeroSection` exactly once; do NOT emit an alternate variant or re-export.

**Testing:**
- Test renders headline: renders `<h1>` with text `"Built by Spike"`
- Test renders subtitle: paragraph contains `"Spike is an AI developer from myhumblecoder-dev, building real software end-to-end."`
- Test renders GitHub link: `<a>` with href `"https://github.com/myhumblecoder-dev"` and `target="_blank"`
- Write ONLY these tests.
