# Epic 3 — UI Components and Home Page Assembly

*Goal: implement LanguageBadge, ProjectCard, ProjectsGallery, then wire the home page to call fetchOrgRepos and render the full portfolio.*

---

## Story 5 — LanguageBadge component

Implement a colored language badge pill.

**Depends on:** (none)

**Files to create:**
- `src/components/LanguageBadge.tsx`
- `src/components/LanguageBadge.test.tsx`

**Acceptance Criteria:**
- `LanguageBadge` accepts one prop: `language: string | null`.
- When `language` is `null` or an empty string, renders nothing (returns `null`).
- When `language` is `"TypeScript"`, renders a `<span>` with text `"TypeScript"` and a blue background class (`bg-blue-500` or `bg-blue-600`).
- When `language` is `"JavaScript"`, renders a `<span>` with text `"JavaScript"` and a yellow background class (`bg-yellow-400` or `bg-yellow-500`).
- When `language` is `"Rust"` (or any string that is not `"TypeScript"` or `"JavaScript"`), renders a `<span>` with that exact language text and a neutral/gray background class (`bg-zinc-500` or `bg-zinc-600`).
- The `<span>` has `text-white` and `rounded-full px-2 py-0.5 text-xs font-medium` classes.
- Implement `LanguageBadge` exactly once; do NOT emit alternate variants.

**Testing:**
- Test renders null for null language: `language={null}` → renders nothing
- Test renders null for empty string: `language=""` → renders nothing
- Test renders TypeScript badge: `language="TypeScript"` → `<span>` with text `"TypeScript"`
- Test renders JavaScript badge: `language="JavaScript"` → `<span>` with text `"JavaScript"`
- Test renders generic badge for Rust: `language="Rust"` → `<span>` with text `"Rust"` and gray background
- Write ONLY these tests.

---

## Story 6 — ProjectCard component

Implement a project card that displays one GitHub repo.

**Depends on:** Story 5

**Files to create:**
- `src/components/ProjectCard.tsx`
- `src/components/ProjectCard.test.tsx`

**Acceptance Criteria:**
- `ProjectCard` accepts one prop: `repo: GitHubRepo` (import type `GitHubRepo` from `src/lib/github-schema.ts`).
- Renders the repo `name` as a `<h2>` (or `<h3>`) heading with an anchor link to `repo.html_url` (`target="_blank" rel="noopener noreferrer"`).
- Renders `repo.description` as a `<p>`. If `description` is null, renders the text `"No description."`.
- Renders a `<LanguageBadge language={repo.language} />` (import from `src/components/LanguageBadge.tsx`).
- Renders `repo.stargazers_count` followed by the text `" stars"` — e.g. given `stargazers_count = 42`, the rendered text is exactly `"42 stars"`.
- The card container has `rounded-xl border border-zinc-800 bg-zinc-900 p-6` classes.
- Implement `ProjectCard` exactly once; do NOT emit alternate variants.

**Testing:**
- Test renders repo name as link: given `repo.name = "my-project"` and `repo.html_url = "https://github.com/myhumblecoder-dev/my-project"`, renders an `<a>` with that href
- Test renders description: given `repo.description = "A cool project"`, renders `"A cool project"`
- Test renders null description fallback: given `repo.description = null`, renders `"No description."`
- Test renders star count: given `repo.stargazers_count = 7`, renders `"7 stars"`
- Write ONLY these tests.

---

## Story 7 — ProjectsGallery component

Implement the projects gallery grid that renders a list of repo cards.

**Depends on:** Story 6

**Files to create:**
- `src/components/ProjectsGallery.tsx`
- `src/components/ProjectsGallery.test.tsx`

**Acceptance Criteria:**
- `ProjectsGallery` accepts one prop: `repos: GitHubRepo[]` (import type `GitHubRepo` from `src/lib/github-schema.ts`).
- Renders a `<section>` containing a CSS grid (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`).
- Renders one `<ProjectCard repo={repo} key={repo.id} />` per item in `repos`.
- When `repos` is empty, renders a `<p>` with text `"No projects found."`.
- Implement `ProjectsGallery` exactly once; do NOT emit alternate variants.

**Testing:**
- Test renders cards for each repo: given 2 repos, renders 2 ProjectCard elements (check by repo names in headings)
- Test renders empty state: given `repos=[]`, renders `"No projects found."`
- Write ONLY these tests.

---

## Story 8 — Home page assembly

Wire the home page to fetch repos and render Hero + Gallery.

**Depends on:** Story 2, Story 4, Story 7

**Files to modify:**
- `src/app/page.tsx`

**Acceptance Criteria:**
- `page.tsx` is an `async` Server Component (no `"use client"` directive).
- This page does NOT use Prisma or any database — data comes from the GitHub API via `fetchOrgRepos`. Do NOT add `export const dynamic = 'force-dynamic'`.
- Exports `export const revalidate = 3600` (ISR — Vercel re-fetches GitHub API data every hour, no DB required).
- Calls `fetchOrgRepos("myhumblecoder-dev")` (import from `src/lib/github.ts`) and awaits the result.
- Renders `<HeroSection />` (import from `src/components/HeroSection.tsx`) above the gallery.
- Renders `<ProjectsGallery repos={repos} />` (import from `src/components/ProjectsGallery.tsx`) below the hero.
- The page wraps both in a `<main>` element with `min-h-screen bg-zinc-950 text-zinc-50` classes.
- `next build` succeeds with no TypeScript or ESLint errors.
- Implement the page export exactly once; do NOT emit alternate variants.
