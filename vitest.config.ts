/// <reference types="vitest/config" />
import { getViteConfig } from 'astro/config'

// Tests run in the node environment: Astro's container renderer fails under jsdom.
// Tests that need a DOM load the rendered HTML into a JSDOM instance themselves.
export default getViteConfig({ test: {} })
