import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { JSDOM } from 'jsdom'
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import Home from '../pages/index.astro'
import { meta } from '../data/portfolio'

async function renderHome() {
  const container = await AstroContainer.create({
    astroConfig: { site: 'https://dylan-sanders.com' },
  })
  const html = await container.renderToString(Home, {
    request: new Request('https://dylan-sanders.com/'),
  })
  return new JSDOM(html).window.document
}

let doc: Document

beforeAll(async () => {
  doc = await renderHome()
})

describe('analytics', () => {
  const analyticsScripts = (d: Document) =>
    [...d.querySelectorAll('script')].filter(s => /umami|googletagmanager|gtag\(/.test(s.outerHTML))

  afterEach(() => {
    vi.unstubAllEnvs()
  })

  it('is left out in dev, so local work does not send hits', () => {
    expect(analyticsScripts(doc)).toHaveLength(0)
  })

  it('loads Umami and Google Analytics in production builds', async () => {
    vi.stubEnv('PROD', true)
    const scripts = analyticsScripts(await renderHome())
    expect(scripts.map(s => s.getAttribute('src'))).toEqual([
      'https://cloud.umami.is/script.js',
      'https://www.googletagmanager.com/gtag/js?id=G-Q2W6S8D277',
      null,
    ])
  })
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
