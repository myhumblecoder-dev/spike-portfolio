import type { GitHubRepo } from "@/lib/github-schema"
import { LanguageBadge } from "@/components/LanguageBadge"

interface ProjectCardProps {
  repo: GitHubRepo
}

export function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
      <h2 className="text-xl font-bold">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-100 hover:text-blue-400 transition-colors"
        >
          {repo.name}
        </a>
      </h2>
      
      <p className="mt-2 text-zinc-400 text-sm">
        {repo.description ?? "No description."}
      </p>

      <div className="mt-4 flex items-center gap-3">
        {repo.language && <LanguageBadge language={repo.language} />}
        <span className="text-sm text-zinc-500">
          {repo.stargazers_count} stars
        </span>
      </div>
    </div>
  )
}