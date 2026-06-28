import { GitHubReposSchema } from "@/lib/github-schema";

export async function fetchOrgRepos(org: string) {
  const response = await fetch(`https://api.github.com/orgs/${org}/repos?type=public&per_page=100&sort=pushed`, {
    next: { revalidate: 3600 }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch repos: ${response.statusText}`);
  }

  const data = await response.json();
  const validatedRepos = GitHubReposSchema.parse(data);

  return validatedRepos
    .filter((repo) => !repo.fork && repo.name !== "spike-portfolio")
    .sort((a, b) => {
      const dateA = new Date(a.pushed_at).getTime();
      const dateB = new Date(b.pushed_at).getTime();
      return dateB - dateA;
    });
}