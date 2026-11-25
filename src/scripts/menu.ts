export function initMobileMenu() {
  const button = document.getElementById('menu-button')!
  const menu = document.getElementById('mobile-menu')!

  const setOpen = (open: boolean) => {
    menu.classList.toggle('hidden', !open)
    button.setAttribute('aria-expanded', String(open))
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
    button.querySelector('[data-icon="open"]')!.classList.toggle('hidden', open)
    button.querySelector('[data-icon="close"]')!.classList.toggle('hidden', !open)
  }

  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'))
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)))
}
