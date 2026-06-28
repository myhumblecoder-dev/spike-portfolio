import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ProjectsGallery } from './ProjectsGallery'
import { ProjectCard } from '@/components/ProjectCard'

vi.mock('@/components/ProjectCard', () => ({
  ProjectCard: vi.fn(),
}))

describe('ProjectsGallery', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders cards for each repo: given 2 repos, renders 2 ProjectCard elements (check by repo names in headings)', async () => {
    const mockRepos = [
      { id: '1', name: 'Repo One', description: 'Desc 1', url: 'https://github.com/1', language: 'TypeScript', stars: 10, forks: 5, updatedAt: new Date().toISOString() },
      { id: '2', name: 'Repo Two', description: 'Desc 2', url: 'https://github.com/2', language: 'JavaScript', stars: 20, forks: 10, updatedAt: new Date().toISOString() }
    ]

    vi.mocked(ProjectCard).mockImplementation(({ repo }) => (
      <div data-testid="project-card">{repo.name}</div>
    ))

    render(<ProjectsGallery repos={mockRepos} />)

    const cards = screen.getAllByTestId('project-card')
    expect(cards).toHaveLength(2)
    expect(screen.getByText('Repo One')).toBeInTheDocument()
    expect(screen.getByText('Repo Two')).toBeInTheDocument()
  })

  it('renders empty state: given `repos=[]`, renders `No projects found.`', async () => {
    render(<ProjectsGallery repos={[]} />)
    expect(screen.getByText('No projects found.')).toBeInTheDocument()
  })
})