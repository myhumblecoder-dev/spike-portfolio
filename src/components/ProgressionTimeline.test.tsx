import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ProgressionTimeline } from './ProgressionTimeline'
import { progression, tagline } from "@/content/progression"

vi.mock("@/content/progression", () => ({
  tagline: "A journey through time",
  progression: [
    { date: "2023-01-01", title: "Milestone One", body: "The beginning." },
    { date: "2024-01-01", title: "Milestone Two", body: "The growth." }
  ]
}))

describe('ProgressionTimeline', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('ProgressionTimeline renders the tagline text', async () => {
    render(<ProgressionTimeline />)
    expect(screen.getByText("A journey through time")).toBeInTheDocument()
  })

  it('ProgressionTimeline renders an h2 with The Progression', async () => {
    render(<ProgressionTimeline />)
    expect(screen.getByRole('heading', { level: 2, name: 'The Progression' })).toBeInTheDocument()
  })

  it('ProgressionTimeline renders every milestone title from the content', async () => {
    render(<ProgressionTimeline />)
    expect(screen.getByText('Milestone One')).toBeInTheDocument()
    expect(screen.getByText('Milestone Two')).toBeInTheDocument()
  })

  it('ProgressionTimeline renders the milestones in array order', async () => {
    render(<ProgressionTimeline />)
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles[0]).toHaveTextContent('Milestone One')
    expect(titles[1]).toHaveTextContent('Milestone Two')
  })
}) 