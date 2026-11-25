---
title: Hello, world
description: An example post showing the frontmatter and formatting this blog supports.
date: 2026-11-24
draft: true
---

This is an example post. It is marked `draft: true`, so it shows up in `npm run dev` but is left out of production builds and the RSS feed. Delete it or replace it with your first real post.

## Frontmatter

Every post needs a `title`, a `description` (used for the post list, search results and link previews) and a `date`. The file name becomes the URL, so this file is served at `/blog/hello-world/`.

## Formatting

Regular Markdown works: **bold**, _italics_, [links](https://astro.build/), lists and quotes.

> Quotes look like this.

Code blocks are highlighted, with separate light and dark themes:

```ts
export function greet(name: string) {
  return `Hello, ${name}`
}
```
