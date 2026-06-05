import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar({ name, navLinks }) {
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
        </div>
      </nav>
    </header>
  )
}
