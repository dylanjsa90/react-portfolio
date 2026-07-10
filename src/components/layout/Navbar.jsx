import { useState } from 'react'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar({ name, navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <a
          href="#"
          className="font-semibold text-slate-900 dark:text-slate-100 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
        >
          {name}
        </a>
        <div className="flex items-center gap-1">
          <ul className="hidden sm:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="px-3 py-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors capitalize"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <ul
        id="mobile-menu"
        className={`${menuOpen ? 'block' : 'hidden'} sm:hidden border-t border-slate-200 dark:border-slate-800 px-4 pt-2 pb-3 space-y-1`}
      >
        {navLinks.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors capitalize"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
