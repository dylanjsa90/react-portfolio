import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

// Must be safe under renderToString (no window/localStorage in Node).
const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  // Server and first client render must agree, so start at 'light' and
  // apply the real preference after mount. The inline script in index.html
  // sets the .dark class on <html> before first paint, so there's no flash.
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    // Two-pass hydration: the stored preference can only be read client-side,
    // and applying it before hydration completes would mismatch the server HTML.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(getPreferredTheme())
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return { theme, toggleTheme }
}
