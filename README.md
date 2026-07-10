# Dylan Sanders — Portfolio

Personal portfolio site: a single-page React app with smooth-scroll section navigation, dark mode, and statically prerendered HTML for SEO.

**Live:** https://dylanjs-react-portfolio.pages.dev/

## Stack

- [React 19](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) (`darkMode: 'class'`)
- Self-hosted fonts via [Fontsource](https://fontsource.org/) (Inter, JetBrains Mono)
- [Vitest](https://vitest.dev/) + React Testing Library
- Deployed on Cloudflare Pages

## Scripts

| Command              | What it does                                   |
| -------------------- | ---------------------------------------------- |
| `npm run dev`        | Dev server at http://localhost:5173            |
| `npm run build`      | Production build with prerendering (see below) |
| `npm run preview`    | Serve the production build locally             |
| `npm test`           | Run the test suite once                        |
| `npm run test:watch` | Run tests in watch mode                        |
| `npm run lint`       | ESLint                                         |
| `npm run format`     | Prettier over the repo                         |

## How the build works

`npm run build` runs three steps:

1. `vite build` — client bundle into `dist/`
2. `vite build --ssr src/entry-server.jsx` — servr-render bundle into `dist-ssr/`
3. `node scripts/prerender.mjs` — renders `<App />` to HTML, injects it into the
   `<!--app-html-->` placeholder in `dist/index.html`, and deletes `dist-ssr/`

In production `src/main.jsx` hydrates the prerendered markup (`hydrateRoot`); in dev it mounts normally (`createRoot`). Components must render identically on server and client — no browser APIs during render.

## Editing content

All copy lives in [`src/data/portfolio.js`](src/data/portfolio.js) — hero, about, skills, projects, experience, and contact info. Components just render what's there.

To add a profile photo, drop an image into `public/` and set `hero.avatarUrl` (e.g. `'/avatar.jpg'`); when it's `null`, the hero falls back to an initial-letter badge.

## Structure

e

```
src/
  components/
    layout/     Navbar, Footer
    sections/   Hero, About, Skills, Projects, Experience, Contact
    ui/         SectionWrapper, ProjectCard, SkillBadge, TimelineItem, ThemeToggle
  data/         portfolio.js (all site content)
  hooks/        useTheme.js
  utils/        analytics.js
  test/         setup.js
```
