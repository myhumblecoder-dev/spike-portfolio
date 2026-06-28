# Architecture — spike-portfolio

*Single source of truth for file paths, stack choices, and conventions. Every story's file list must draw from the inventory below.*

---

## Stack

| Layer | Technology | Notes |
|---|---|---|
| Framework | Next.js 16 (App Router) | Static-friendly; Server Components fetch GitHub API at request time |
| Language | TypeScript 5 | Strict mode |
| Styling | Tailwind CSS 4 | Utility-first; dark mode via `class` strategy |
| UI components | shadcn/ui (Radix-based) | Install components as needed per story |
| Data | GitHub REST API v3 | `https://api.github.com/orgs/myhumblecoder-dev/repos` · public, no auth required · 60 req/hr unauthenticated |
| HTTP | Native `fetch` (Next.js extended) | Server Components only; `{ next: { revalidate: 3600 } }` to cache 1 hr |
| Testing | Vitest 4 + React Testing Library | Co-located tests (`*.test.tsx`); TZ=UTC in CI |
| CI | GitHub Actions | `.github/workflows/ci.yml`: lint + build on PR |
| Hosting | Vercel | Auto-deploy on push to `main`; preview on PRs |
| Schema validation | Zod 4 | Validate/parse GitHub API response shapes |
| DB | **None** | All data sourced from GitHub API — no Prisma, no database |

### Conventions
- **No database.** Prisma is installed in the scaffold but unused in this project — do NOT add Prisma models or reference `src/lib/db.ts`.
- **GitHub API fetching in Server Components only.** Pages fetch data directly in the component (`async function Page()`); no client-side SWR or React Query.
- **Zod for API response parsing.** All GitHub API responses are parsed with a Zod schema before use — never access raw response fields directly.
- **`export const revalidate = 3600`** (ISR) on every page that calls the GitHub API, so Vercel re-fetches every hour.
- **Tests are co-located** (`Foo.tsx` + `Foo.test.tsx` side by side).
- **Naming:** `PascalCase` for components, `camelCase` for utils/functions, `kebab-case` for file paths (except components).
- **One symbol per file.** Each file exports one primary symbol; no shared "barrel" files that two stories touch.
- **No `as any` in tests.** Typed factory objects or typed mock returns only.
- **Implement each exported function exactly once.** No hedge twins, no alternate variants.

---

## Data Model

No Prisma models. The canonical data entity is the GitHub repo response, typed as:

```typescript
// src/lib/github.ts
export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  pushed_at: string   // ISO 8601 string
  fork: boolean
}
```

Fetching + filtering lives in `src/lib/github.ts`; the Zod schema for validation lives in `src/lib/github-schema.ts`.

---

## File & Folder Inventory

*Every path a story may reference. Stories MUST NOT invent paths outside this list.*

| Path | Purpose |
|---|---|
| `src/app/page.tsx` | Home page — renders Hero + ProjectsGallery |
| `src/app/layout.tsx` | Root layout — font, metadata, dark mode wrapper |
| `src/app/globals.css` | Global Tailwind base styles |
| `src/lib/github-schema.ts` | Zod schema `GitHubRepoSchema` + `GitHubRepo` type |
| `src/lib/github.ts` | `fetchOrgRepos(org: string): Promise<GitHubRepo[]>` — fetch, parse, filter, sort |
| `src/lib/github.test.ts` | Unit tests for `fetchOrgRepos` (mocked `fetch`) |
| `src/components/HeroSection.tsx` | Hero: Spike introduction, headline, subtitle |
| `src/components/HeroSection.test.tsx` | RTL tests for HeroSection |
| `src/components/ProjectCard.tsx` | Single project card: name, description, language badge, stars, link |
| `src/components/ProjectCard.test.tsx` | RTL tests for ProjectCard |
| `src/components/ProjectsGallery.tsx` | Grid of ProjectCards; accepts `repos: GitHubRepo[]` prop |
| `src/components/ProjectsGallery.test.tsx` | RTL tests for ProjectsGallery |
| `src/components/LanguageBadge.tsx` | Colored pill showing programming language |
| `src/components/LanguageBadge.test.tsx` | RTL tests for LanguageBadge |
| `.github/workflows/ci.yml` | CI: lint + build on PRs (already committed by scaffold) |
| `docs/prd.md` | Product requirements (this planning artifact) |
| `docs/architecture.md` | Architecture (this file) |
| `docs/epics/epic-1-foundation.md` | Epic 1 story definitions |
| `docs/epics/epic-2-github-integration.md` | Epic 2 story definitions |
| `docs/epics/epic-3-ui-polish.md` | Epic 3 story definitions |

---

## Epics Overview

| Epic | Name | Goal |
|---|---|---|
| 1 | Foundation | Layout, hero section, global styles, Tailwind dark mode |
| 2 | GitHub Integration | Zod schema, fetch util, projects gallery, project card |
| 3 | UI Polish | Language badge, page metadata, accessibility, ISR wiring |

---

## API Reference

**Endpoint:** `GET https://api.github.com/orgs/myhumblecoder-dev/repos?type=public&per_page=100&sort=pushed`

**Filter rules (in `fetchOrgRepos`):**
1. Exclude repos where `fork === true`
2. Exclude the repo named `spike-portfolio` (this repo)
3. Sort by `pushed_at` descending (newest first) — the API already does this with `sort=pushed` but the filter must re-sort after excluding items

**Caching:** Server Component pages export `export const revalidate = 3600` (1-hour ISR on Vercel).
