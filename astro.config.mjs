import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://dylan-sanders.com',
  integrations: [sitemap()],
})
