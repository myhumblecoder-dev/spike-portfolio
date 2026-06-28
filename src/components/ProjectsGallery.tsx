import { ProjectCard } from "@/components/ProjectCard"
import type { GitHubRepo } from "@/lib/github-schema"

interface ProjectsGalleryProps {
  repos: GitHubRepo[]
}

export function ProjectsGallery({ repos }: ProjectsGalleryProps) {
  if (repos.length === 0) {
    return <p>No projects found.</p>
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </section>
  )
}