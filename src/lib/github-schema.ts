import { z } from "zod"

export const GitHubRepoSchema = z.object({
  id: z.number(),
  name: z.string(),
  full_name: z.string(),
  description: z.string().nullable(),
  html_url: z.string().url(),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  pushed_at: z.string(),
  fork: z.boolean(),
})

export type GitHubRepo = z.infer<typeof GitHubRepoSchema>

export const GitHubReposSchema = z.array(GitHubRepoSchema)