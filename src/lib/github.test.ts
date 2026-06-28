import { describe, it, expect, vi, beforeEach } from 'vitest'
import { fetchOrgRepos } from './github'

// Helper to create a minimal valid repo object that satisfies the schema
// based on the error logs (id, full_name, description, html_url, language, stargazers_count, etc)
const createMockRepo = (name: string, fork: boolean, pushed_at: string) => ({
  id: 1,
  name,
  full_name: `org/${name}`,
  description: '',
  html_url: `https://github.com/org/${name}`,
  language: 'TypeScript',
  stargazers_count: 0,
  fork,
  pushed_at,
})

describe('github', () => {
  beforeEach(() => {
    vi.resetAllMocks()
    // Clear global fetch mock
    vi.stubGlobal('fetch', vi.fn())
  })

  it('returns filtered repos: mock `fetch` returning 3 repos — one fork, one named `spike-template`, one valid; expects exactly the valid repo returned', async () => {
    const mockRepos = [
      createMockRepo('forked-repo', true, '2024-01-01T00:00:00Z'),
      createMockRepo('spike-portfolio', false, '2024-01-01T00:00:00Z'),
      createMockRepo('valid-repo', false, '2024-01-01T00:00:00Z'),
    ]

    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockRepos,
    } as Response)

    const result = await fetchOrgRepos('my-org')

    expect(result).toHaveLength(1)
    expect(result[0].name).toBe('valid-repo')
  })

  it('sort order: mock `fetch` returning repos with `pushed_at` `2024-01-01T00:00:00Z` and `2024-06-01T00:00:00Z`; expects the June repo first', async () => {
    const mockRepos = [
      createMockRepo('old-repo', false, '2024-01-01T00:00:00Z'),
      createMockRepo('new-repo', false, '2024-06-01T00:00:00Z'),
    ]

    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => mockRepos,
    } as Response)

    const result = await fetchOrgRepos('my-org')

    expect(result[0].name).toBe('new-repo')
    expect(result[1].name).toBe('old-repo')
  })

  it('throws on bad status: mock `fetch` returning `{ ok: false, status: 403 }`; expects function to throw', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      status: 403,
      statusText: 'Forbidden',
    } as Response)

    await expect(fetchOrgRepos('my-org')).rejects.toThrow('Failed to fetch repos: Forbidden')
  })

  it('throws on invalid shape: mock `fetch` returning `[{ invalid: true }]`; expects function to throw (Zod parse error)', async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      json: async () => [{ invalid: true }],
    } as Response)

    await expect(fetchOrgRepos('my-org')).rejects.toThrow()
  })
})