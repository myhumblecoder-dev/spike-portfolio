import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('HeroSection renders an h1 with the text Spike AI Assistant Developer', async () => {
    render(<HeroSection />)
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline).toHaveTextContent('Spike AI Assistant Developer')
  })

  it('HeroSection renders a paragraph containing written entirely by local models', async () => {
    render(<HeroSection />)
    const paragraph = screen.getByText(/written entirely by local models/i)
    expect(paragraph).toBeInTheDocument()
  })

  it('HeroSection renders the GitHub link with href https://github.com/myhumblecoder-dev', async () => {
    render(<HeroSection />)
    const link = screen.getByRole('link', { name: 'View on GitHub' })
    expect(link).toHaveAttribute('href', 'https://github.com/myhumblecoder-dev')
  })
})
