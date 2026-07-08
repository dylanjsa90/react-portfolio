import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production HTML is prerendered by scripts/prerender.mjs; dev serves an empty shell.
if (import.meta.env.DEV) {
  createRoot(root).render(app)
} else {
  hydrateRoot(root, app)
}
