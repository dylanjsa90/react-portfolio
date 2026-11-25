import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { JSDOM } from 'jsdom'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import ThemeToggle from '../components/ui/ThemeToggle.astro'
import { initThemeToggle } from './theme'

const button = () => document.getElementById('theme-toggle')!
const root = () => document.documentElement

beforeEach(async () => {
  const container = await AstroContainer.create()
  const html = await container.renderToString(ThemeToggle)
  // A URL gives JSDOM a fresh, working localStorage for each test.
  const { window } = new JSDOM(html, { url: 'https://dylan-sanders.com/' })
  vi.stubGlobal('document', window.document)
  vi.stubGlobal('localStorage', window.localStorage)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('theme toggle', () => {
  it('starts in light mode without storing a preference', () => {
    initThemeToggle()
    expect(button().getAttribute('aria-label')).toBe('Switch to dark mode')
    expect(localStorage.getItem('theme')).toBeNull()
  })

  it('matches the dark class set before paint', () => {
    root().classList.add('dark')
    initThemeToggle()
    expect(button().getAttribute('aria-label')).toBe('Switch to light mode')
  })

  it('toggles dark mode on click and stores the choice', () => {
    initThemeToggle()
    button().click()
    expect(root().classList.contains('dark')).toBe(true)
    expect(button().getAttribute('aria-label')).toBe('Switch to light mode')
    expect(localStorage.getItem('theme')).toBe('dark')

    button().click()
    expect(root().classList.contains('dark')).toBe(false)
    expect(localStorage.getItem('theme')).toBe('light')
  })
})
