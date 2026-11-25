import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://dylan-sanders.com',
  integrations: [sitemap()],
  markdown: {
    // Both themes are emitted; global.css switches to the dark one under .dark.
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
})
