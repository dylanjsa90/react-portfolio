// The initial .dark class is set by the inline script in Base.astro before first paint.
// The preference is only stored once the visitor picks one, so the OS setting is followed until then.
export function initThemeToggle() {
  const button = document.getElementById('theme-toggle')!
  const root = document.documentElement

  const syncLabel = () => {
    const dark = root.classList.contains('dark')
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`)
  }

  syncLabel()
  button.addEventListener('click', () => {
    const dark = root.classList.toggle('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    syncLabel()
  })
}
