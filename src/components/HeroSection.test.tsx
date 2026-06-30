import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { HeroSection } from './HeroSection'
import { siteName, heroSubtitle, githubUrl } from "@/content/site"

describe('HeroSection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('HeroSection renders siteName as the heading (assert against the imported siteName value, not a hardcoded string)', async () => {
    render(<HeroSection />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(siteName)
  })

  it('HeroSection renders the heroSubtitle text (assert against the imported heroSubtitle)', async () => {
    render(<HeroSection />)
    const paragraph = screen.getByText(heroSubtitle)
    expect(paragraph).toBeInTheDocument()
  })

  it('HeroSection renders the GitHub link with href equal to githubUrl', async () => {
    render(<HeroSection />)
    const link = screen.getByRole('link', { name: 'View on GitHub' })
    expect(link).toHaveAttribute('href', githubUrl)
  })
})
