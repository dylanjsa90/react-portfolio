export default function Footer({ name, socials }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <span>© {year} {name}</span>
        <div className="flex gap-4">
          {socials.map(s => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              {s.platform}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
