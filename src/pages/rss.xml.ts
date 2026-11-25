import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getPosts } from '../data/blog'

export async function GET(context: APIContext) {
  const posts = await getPosts()
  return rss({
    title: 'Dylan Sanders: Blog',
    description: 'Writing by Dylan Sanders on full-stack software engineering.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.id}/`,
    })),
  })
}
