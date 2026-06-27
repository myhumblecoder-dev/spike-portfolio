import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ProjectCard } from './ProjectCard'

vi.mock('@/components/LanguageBadge', () => ({
  LanguageBadge: vi.fn(),
}))

describe('ProjectCard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders repo name as link: given `repo.name = my-project` and `repo.html_url = https://github.com/myhumblecoder-dev/my-project`, renders an `<a>` with that href', async () => {
    const repo = {
      name: 'my-project',
      html_url: 'https://github.com/myhumblecoder-dev/my-project',
      description: 'A cool project',
      stargazers_count: 10,
      language: 'TypeScript',
    }
    render(<ProjectCard repo={repo} />)
    const link = screen.getByRole('link', { name: 'my-project' })
    expect(link).toHaveAttribute('href', 'https://github.com/myhumblecoder-dev/my-project')
  })

  it('renders description: given `repo.description = A cool project`, renders `A cool project`', async () => {
    const repo = {
      name: 'my-project',
      html_url: 'https://github.com/myhumblecoder-dev/my-project',
      description: 'A cool project',
      stargazers_count: 10,
      language: 'TypeScript',
    }
    render(<ProjectCard repo={repo} />)
    expect(screen.getByText('A cool project')).toBeInTheDocument()
  })

  it('renders null description fallback: given `repo.description = null`, renders `No description.`', async () => {
    const repo = {
      name: 'my-project',
      html_url: 'https://github.com/myhumblecoder-dev/my-project',
      description: null,
      stargazers_count: 10,
      language: 'TypeScript',
    }
    render(<ProjectCard repo={repo} />)
    expect(screen.getByText('No description.')).toBeInTheDocument()
  })

  it('renders star count: given `repo.stargazers_count = 7`, renders `7 stars`', async () => {
    const repo = {
      name: 'my-project',
      html_url: 'https://github.com/myhumblecoder-dev/my-project',
      description: 'A cool project',
      stargazers_count: 7,
      language: 'TypeScript',
    }
    render(<ProjectCard repo={repo} />)
    expect(screen.getByText('7 stars')).toBeInTheDocument()
  })
})