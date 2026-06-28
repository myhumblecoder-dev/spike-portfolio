# Epic 2 — GitHub Integration

*Goal: fetch live public repos from GitHub API, parse with Zod, and render them as project cards in a gallery grid.*

---

## Story 3 — GitHub API Zod schema

Define the `GitHubRepoSchema` Zod schema and `GitHubRepo` TypeScript type.

**Depends on:** (none)

**Files to create:**
- `src/lib/github-schema.ts`

**Acceptance Criteria:**
- Exports `GitHubRepoSchema` — a `z.object({...})` with fields: `id` (`z.number()`), `name` (`z.string()`), `full_name` (`z.string()`), `description` (`z.string().nullable()`), `html_url` (`z.string().url()`), `language` (`z.string().nullable()`), `stargazers_count` (`z.number()`), `pushed_at` (`z.string()`), `fork` (`z.boolean()`).
- Exports `GitHubRepo` as `z.infer<typeof GitHubRepoSchema>`.
- Exports `GitHubReposSchema` as `z.array(GitHubRepoSchema)`.
- Uses Zod 4 API: `z.string().nullable()` (NOT `.nullish()`), `z.string().url()`.
- Implement `GitHubRepoSchema` exactly once; do NOT emit alternate variants.

---

## Story 4 — fetchOrgRepos utility

Implement `fetchOrgRepos` that fetches, validates, filters, and sorts org repos.

**Depends on:** Story 3

**Files to create:**
- `src/lib/github.ts`
- `src/lib/github.test.ts`

**Acceptance Criteria:**
- Exports `fetchOrgRepos(org: string): Promise<GitHubRepo[]>`.
- Fetches `https://api.github.com/orgs/${org}/repos?type=public&per_page=100&sort=pushed` with `{ next: { revalidate: 3600 } }`.
- Parses the response JSON with `GitHubReposSchema.parse(...)` (import `GitHubReposSchema` from `src/lib/github-schema.ts`). Throws if the response is not ok or if Zod parsing fails.
- Filters out repos where `fork === true`.
- Filters out repos where `name === "spike-portfolio"`.
- Sorts remaining repos by `pushed_at` descending (most recent first).
- Returns the filtered, sorted `GitHubRepo[]`.
- Implement `fetchOrgRepos` exactly once; omit return-type annotation and let TypeScript infer.

**Testing:**
- Test returns filtered repos: mock `fetch` returning 3 repos — one fork, one named `spike-portfolio`, one valid; expects exactly the valid repo returned.
- Test sort order: mock `fetch` returning repos with `pushed_at` `"2024-01-01T00:00:00Z"` and `"2024-06-01T00:00:00Z"`; expects the June repo first.
- Test throws on bad status: mock `fetch` returning `{ ok: false, status: 403 }`; expects function to throw.
- Test throws on invalid shape: mock `fetch` returning `[{ invalid: true }]`; expects function to throw (Zod parse error).
- Write ONLY these tests.
