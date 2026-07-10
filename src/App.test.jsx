import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { meta } from './data/portfolio'

describe('App', () => {
  it('renders the navbar with all section links', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    for (const link of meta.navLinks) {
      expect(screen.getAllByRole('link', { name: new RegExp(link, 'i') }).length).toBeGreaterThan(0)
    }
  })

  it('renders every section heading', () => {
    render(<App />)
    for (const heading of ['about', 'skills', 'projects', 'experience', 'contact']) {
      expect(
        screen.getByRole('heading', { name: new RegExp(heading, 'i') })
      ).toBeInTheDocument()
    }
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
