import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from './ThemeToggle'

describe('ThemeToggle', () => {
  beforeEach(() => {
    // useTheme's effects mutate global state; reset between tests
    document.documentElement.classList.remove('dark')
    localStorage.clear()
  })

  it('starts in light mode (matchMedia stub prefers light)', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('toggles to dark mode on click', async () => {
    const user = userEvent.setup()
    render(<ThemeToggle />)

    await user.click(screen.getByRole('button', { name: /switch to dark mode/i }))

    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
    expect(document.documentElement).toHaveClass('dark')
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('respects a stored dark preference on mount', async () => {
    localStorage.setItem('theme', 'dark')
    render(<ThemeToggle />)

    expect(await screen.findByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
    expect(document.documentElement).toHaveClass('dark')
  })
})
