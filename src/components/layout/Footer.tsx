import type { Social } from '../../types'

interface FooterProps {
  name: string
  socials: Social[]
}

export default function Footer({ name, socials }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line dark:border-line-dark py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500 dark:text-graphite">
        <span suppressHydrationWarning>
          © {year} {name.toLowerCase().replace(/\s+/g, '-')} {'// built with react + vite'}
        </span>
        <div className="flex gap-4">
          {socials.map(s => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ochre dark:hover:text-amber transition-colors"
            >
              {s.platform.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
