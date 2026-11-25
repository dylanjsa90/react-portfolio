# Dylan Sanders — Portfolio

Personal portfolio site built with Astro: static HTML with smooth-scroll section navigation, dark mode, and a few small scripts for the interactive parts.

**Live:** https://dylan-sanders.com/

## Stack

- [Astro 7](https://astro.build/), static output, no UI framework
- [Tailwind CSS 3](https://tailwindcss.com/) (`darkMode: 'class'`) via PostCSS
- Self-hosted fonts via [Fontsource](https://fontsource.org/) (Inter, JetBrains Mono)
- [Vitest](https://vitest.dev/) with Astro's container renderer and jsdom
- Sitemap via `@astrojs/sitemap`
- Deployed on Cloudflare Pages

Requires Node 22.23.4 or newer (see `.nvmrc`).

## Scripts

| Command              | What it does                                    |
| -------------------- | ----------------------------------------------- |
| `npm run dev`        | Dev server at http://localhost:4321             |
| `npm run build`      | Type check (`astro check`), then build to dist/ |
| `npm run preview`    | Serve the production build locally              |
| `npm test`           | Run the test suite once                         |
| `npm run test:watch` | Run tests in watch mode                         |
| `npm run typecheck`  | `astro check` only                              |
| `npm run lint`       | ESLint                                          |
| `npm run format`     | Prettier over the repo                          |

## How it works

Every page in `src/pages/` is rendered to static HTML at build time and wrapped in `src/layouts/Base.astro`, which holds the `<head>` (meta tags, analytics, structured data) and the navbar and footer. Pass `title` and `description` to set each page's tags; the canonical URL comes from the page path and `site` in `astro.config.mjs`.

The only client-side JavaScript lives in `src/scripts/`:

- `theme.ts`: theme toggle. An inline script in `Base.astro` sets the `dark` class before first paint; the choice is only stored in `localStorage` once the visitor clicks the toggle.
- `menu.ts`: mobile nav menu.
- `snake.ts`: the snake animation and game in the hero.

Navbar links are root-relative (`/#about`) so they work from any page.

## Editing content

All copy lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): hero, about, skills, projects, experience, and contact info. Types are in [`src/types.ts`](src/types.ts). Components just render what's there.

## Writing blog posts

Add a Markdown file to `src/content/blog/`. The file name becomes the URL (`my-post.md` is served at `/blog/my-post/`). Frontmatter:

```md
---
title: My post
description: One or two sentences, used in the post list, search results and link previews.
date: 2026-11-24
draft: true # optional; drafts show in `npm run dev` only
---
```

The schema is in `src/content.config.ts`, and `npm run build` fails if a post doesn't match it. Published posts appear at `/blog/`, in `/rss.xml` and in the sitemap. Code blocks are highlighted with Shiki in light and dark themes.

## Structure

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Hero, About, Skills, Projects, Experience, Contact
    ui/         SectionWrapper, ProjectCard, TimelineItem, ThemeToggle, SnakeGrid
  data/         portfolio.ts (all site content), blog.ts (post helpers)
  layouts/      Base.astro
  content/      blog/ (Markdown posts)
  pages/        index.astro, blog/index.astro, blog/[slug].astro, rss.xml.ts
  scripts/      theme.ts, menu.ts, snake.ts (+ tests)
  styles/       global.css
  test/         home.test.ts, blog.test.ts (+ fixtures)
```
