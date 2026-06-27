import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { LanguageBadge } from './LanguageBadge'

describe('LanguageBadge', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders null for null language: `language={null}` → renders nothing', async () => {
    const { container } = render(<LanguageBadge language={null} />)
    expect(container.firstChild).toBeNull()
  })

  it('renders null for empty string: `language=` → renders nothing', async () => {
    const { container } = render(<LanguageBadge language="" />)
    expect(container.firstChild).toBeNull()
  })

  it('renders TypeScript badge: `language=TypeScript` → `<span>` with text `TypeScript`', async () => {
    render(<LanguageBadge language="TypeScript" />)
    const badge = screen.getByText('TypeScript')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-blue-500')
  })

  it('renders JavaScript badge: `language=JavaScript` → `<span>` with text `JavaScript`', async () => {
    render(<LanguageBadge language="JavaScript" />)
    const badge = screen.getByText('JavaScript')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-yellow-400')
  })

  it('renders generic badge for Rust: `language=Rust` → `<span>` with text `Rust` and gray background', async () => {
    render(<LanguageBadge language="Rust" />)
    const badge = screen.getByText('Rust')
    expect(badge).toBeInTheDocument()
    expect(badge).toHaveClass('bg-zinc-500')
  })
})
