import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { render } = await import(resolve(root, 'dist-ssr/entry-server.js'))

const indexPath = resolve(root, 'dist/index.html')
const template = readFileSync(indexPath, 'utf-8')
const html = template.replace('<!--app-html-->', render())
if (html === template) {
  throw new Error('Placeholder <!--app-html--> not found in dist/index.html')
}

writeFileSync(indexPath, html)
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('Prerendered dist/index.html')
