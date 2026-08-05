import SnakeGrid from '../ui/SnakeGrid'
import type { HeroData } from '../../types'

export default function Hero({ name, tagline, cta }: Pick<HeroData, 'name' | 'tagline' | 'cta'>) {
  return (
    <section className="bg-dotgrid min-h-[calc(100vh-3.5rem)] flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        <div>
          <p className="hero-line font-mono text-sm text-ochre dark:text-amber mb-3">
            {'// full-stack engineer'}
          </p>
          <h1 className="hero-line font-mono lowercase text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-slate-100 tracking-tighter mb-4">
            {name}
          </h1>
          <p className="hero-line text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            {tagline}
          </p>
          <div className="hero-line flex flex-col sm:flex-row gap-3">
            <a
              href={cta.href}
              className="px-6 py-3 rounded-sm bg-ochre dark:bg-amber text-paper dark:text-ink font-mono font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              {cta.label}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-sm border border-line dark:border-line-dark text-slate-700 dark:text-slate-300 hover:border-ochre dark:hover:border-amber font-mono font-semibold text-sm transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
        <SnakeGrid />
      </div>
    </section>
  )
}
