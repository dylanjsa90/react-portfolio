import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { JSDOM } from 'jsdom'
import { beforeAll, describe, expect, it } from 'vitest'
import Home from '../pages/index.astro'
import { meta } from '../data/portfolio'

let doc: Document

beforeAll(async () => {
  const container = await AstroContainer.create({
    astroConfig: { site: 'https://dylan-sanders.com' },
  })
  const html = await container.renderToString(Home, {
    request: new Request('https://dylan-sanders.com/'),
  })
  doc = new JSDOM(html).window.document
})

describe('home page', () => {
  it('links to every section from the navbar, root-relative so links work from other pages', () => {
    const hrefs = [...doc.querySelectorAll('nav a')].map(a => a.getAttribute('href'))
    for (const link of meta.navLinks) {
      expect(hrefs).toContain(`/#${link}`)
    }
  })

  it('renders every section with its heading', () => {
    for (const id of meta.navLinks) {
      expect(doc.getElementById(id)?.querySelector('h2')?.textContent).toContain(`/${id}`)
    }
  })

  it('sets the title, canonical URL and social tags', () => {
    expect(doc.title).toBe('Dylan Sanders — Full-Stack Software Engineer')
    expect(doc.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://dylan-sanders.com/',
    )
    expect(doc.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(
      'https://dylan-sanders.com/',
    )
    expect(doc.querySelector('meta[property="og:image"]')?.getAttribute('content')).toBe(
      'https://dylan-sanders.com/og-image.png',
    )
  })

  it('renders the footer', () => {
    expect(doc.querySelector('footer')?.textContent).toMatch(/dylan-sanders \/\/ built with astro/)
  })
})
