import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders headline: renders `<h1>` with text `Built by Spike`', async () => {
    render(<HeroSection />)
    const headline = screen.getByRole('heading', { level: 1 })
    expect(headline).toHaveTextContent('Built by Spike')
  })

  it('renders subtitle: paragraph contains `Spike is an AI developer from myhumblecoder-dev, building real software end-to-end.`', async () => {
    render(<HeroSection />)
    const subtitle = screen.getByText('Spike is an AI developer from myhumblecoder-dev, building real software end-to-end.')
    expect(subtitle).toBeInTheDocument()
  })

  it('renders GitHub link: `<a>` with href `https://github.com/myhumblecoder-dev` and `target=_blank`', async () => {
    render(<HeroSection />)
    const link = screen.getByRole('link', { name: 'View on GitHub' })
    expect(link).toHaveAttribute('href', 'https://github.com/myhumblecoder-dev')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
