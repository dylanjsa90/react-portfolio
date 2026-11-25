import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { JSDOM } from 'jsdom'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import Navbar from '../components/layout/Navbar.astro'
import { initMobileMenu } from './menu'

const button = () => document.getElementById('menu-button')!
const menu = () => document.getElementById('mobile-menu')!

beforeEach(async () => {
  const container = await AstroContainer.create()
  const html = await container.renderToString(Navbar, {
    props: { name: 'Test Name', navLinks: ['about', 'projects', 'contact'] },
  })
  vi.stubGlobal('document', new JSDOM(html).window.document)
  initMobileMenu()
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('mobile menu', () => {
  it('starts closed', () => {
    expect(button().getAttribute('aria-expanded')).toBe('false')
    expect(button().getAttribute('aria-label')).toBe('Open menu')
    expect(menu().classList.contains('hidden')).toBe(true)
  })

  it('opens and closes on hamburger click', () => {
    button().click()
    expect(button().getAttribute('aria-expanded')).toBe('true')
    expect(button().getAttribute('aria-label')).toBe('Close menu')
    expect(menu().classList.contains('hidden')).toBe(false)

    button().click()
    expect(button().getAttribute('aria-expanded')).toBe('false')
    expect(menu().classList.contains('hidden')).toBe(true)
  })

  it('closes when a mobile link is clicked', () => {
    button().click()
    menu().querySelector<HTMLAnchorElement>('a[href="/#about"]')!.click()
    expect(button().getAttribute('aria-expanded')).toBe('false')
    expect(menu().classList.contains('hidden')).toBe(true)
  })
})
