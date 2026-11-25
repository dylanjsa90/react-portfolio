import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { JSDOM } from 'jsdom'
import { afterEach, describe, expect, it, vi } from 'vitest'
import BlogIndex from '../pages/blog/index.astro'
import Post from '../pages/blog/[slug].astro'
import { getPosts } from '../data/blog'

// Vitest can't load the real content collection (Astro only syncs it for `astro dev`/`astro build`),
// so posts come from fixtures. Real posts are validated against the schema by `astro build`.
vi.mock('astro:content', () => {
  const posts = [
    {
      id: 'older',
      data: {
        title: 'Older',
        description: 'Older post',
        date: new Date('2026-01-01'),
        draft: false,
      },
    },
    {
      id: 'newer',
      data: {
        title: 'Newer',
        description: 'Newer post',
        date: new Date('2026-06-01'),
        draft: false,
      },
    },
    {
      id: 'wip',
      data: { title: 'WIP', description: 'Draft post', date: new Date('2026-12-01'), draft: true },
    },
  ].map(post => ({ ...post, collection: 'blog' }))
  return {
    getCollection: async (_: string, filter: (post: unknown) => boolean = () => true) =>
      posts.filter(filter),
    render: async () => ({ Content: (await import('./fixtures/PostBody.astro')).default }),
  }
})

const site = 'https://dylan-sanders.com'

async function renderPage(
  Page: Parameters<AstroContainer['renderToString']>[0],
  path: string,
  props = {},
) {
  const container = await AstroContainer.create({ astroConfig: { site } })
  const html = await container.renderToString(Page, {
    request: new Request(new URL(path, site)),
    props,
  })
  return new JSDOM(html).window.document
}

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('getPosts', () => {
  it('returns posts newest first, including drafts in dev', async () => {
    expect((await getPosts()).map(post => post.id)).toEqual(['wip', 'newer', 'older'])
  })

  it('leaves drafts out of production builds', async () => {
    vi.stubEnv('DEV', false)
    expect((await getPosts()).map(post => post.id)).toEqual(['newer', 'older'])
  })
})

describe('blog index', () => {
  it('lists every post with a link, newest first', async () => {
    const doc = await renderPage(BlogIndex, '/blog/')
    const hrefs = [...doc.querySelectorAll('main li a')].map(a => a.getAttribute('href'))
    expect(hrefs).toEqual(['/blog/wip/', '/blog/newer/', '/blog/older/'])
    expect(doc.querySelector('main li')?.textContent).toContain('[draft]')
    expect(doc.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(`${site}/blog/`)
  })

  it('shows an empty state when there are no posts', async () => {
    vi.stubEnv('DEV', false)
    const content = await import('astro:content')
    vi.spyOn(content, 'getCollection').mockResolvedValueOnce([])
    const doc = await renderPage(BlogIndex, '/blog/')
    expect(doc.querySelector('main')?.textContent).toContain('// no posts yet')
  })
})

describe('post page', () => {
  it('renders the post with article metadata', async () => {
    const post = (await getPosts()).find(p => p.id === 'newer')!
    const doc = await renderPage(Post, '/blog/newer/', { post })

    expect(doc.querySelector('h1')?.textContent).toContain('Newer')
    expect(doc.querySelector('time')?.textContent).toContain('2026-06-01')
    expect(doc.querySelector('.prose')?.textContent).toContain('Fixture post body.')
    expect(doc.title).toBe('Newer | Dylan Sanders')
    expect(doc.querySelector('meta[property="og:type"]')?.getAttribute('content')).toBe('article')
    expect(doc.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      `${site}/blog/newer/`,
    )
    const jsonLd = [...doc.querySelectorAll('script[type="application/ld+json"]')]
      .map(script => JSON.parse(script.textContent!))
      .find(data => data['@type'] === 'BlogPosting')
    expect(jsonLd).toMatchObject({
      '@type': 'BlogPosting',
      headline: 'Newer',
      datePublished: '2026-06-01T00:00:00.000Z',
      url: `${site}/blog/newer/`,
    })
  })
})
