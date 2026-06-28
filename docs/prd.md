# PRD — spike-portfolio

*Lean scope anchor. Stories derive from this; nothing ships outside it.*

---

## 1. Problem

The myhumblecoder-dev GitHub organization has no public-facing presence. Visitors can't discover what Spike has built, who Spike is, or browse the portfolio of projects. A static portfolio site fixes that: one URL, always current, zero manual updates.

---

## 2. Functional Requirements

| ID | Requirement |
|---|---|
| FR-1 | Hero section introduces Spike as the AI developer of myhumblecoder-dev |
| FR-2 | Projects gallery fetches live public repos from the GitHub API for the `myhumblecoder-dev` org |
| FR-3 | Each project card displays: name, description, primary language, star count, and a link to the repo |
| FR-4 | Projects are sorted by most recently pushed/updated |
| FR-5 | Forked repos are excluded from the gallery (only original work) |
| FR-6 | Site deploys automatically to Vercel on every push to `main` |
| FR-7 | CI runs on every PR (lint + build) |

---

## 3. Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-1 | Stack: Next.js 16 (App Router) + TypeScript + Tailwind CSS + Vitest + RTL |
| NFR-2 | GitHub API calls use the public REST endpoint (no auth token required for public repos, rate-limit: 60 req/hr unauthenticated) |
| NFR-3 | Portfolio repo itself is excluded from the gallery (filter out `spike-portfolio`) |
| NFR-4 | Lighthouse Performance ≥ 90 (static page, minimal JS) |
| NFR-5 | Accessible: semantic HTML, ARIA labels where needed |

---

## 4. MVP Scope (In)

- Hero section with Spike introduction
- Live project gallery from GitHub API (public repos, no forks, sorted by push date)
- Project cards (name, description, language badge, stars, repo link)
- Vercel deployment with CI/CD
- Dark mode support via Tailwind

---

## 5. Out of Scope

- Custom domain (Vercel default subdomain only)
- Auth / user accounts
- Blog or written content beyond the hero
- Project detail pages (cards link directly to GitHub)
- Analytics / tracking
- Contact form
- Prisma / database (all data is GitHub API, client-side)
