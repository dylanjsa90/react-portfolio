import { getCollection } from 'astro:content'

// Drafts show in `npm run dev` but are left out of production builds and the RSS feed.
export async function getPosts() {
  const posts = await getCollection('blog', post => import.meta.env.DEV || !post.data.draft)
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
}

export const formatDate = (date: Date) => date.toISOString().slice(0, 10)
