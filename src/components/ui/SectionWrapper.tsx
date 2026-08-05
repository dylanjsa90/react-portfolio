import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  title?: string
  children: ReactNode
  className?: string
}

export default function SectionWrapper({
  id,
  title,
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full ${className}`}>
      {title && (
        <div className="mb-12 flex items-baseline gap-4">
          <h2 className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            <span className="text-ochre dark:text-amber">GET</span> /{id}
          </h2>
          <div className="h-px flex-1 bg-line dark:bg-line-dark" />
        </div>
      )}
      {children}
    </section>
  )
}
