export default function SectionWrapper({ id, title, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full ${className}`}
    >
      {title && (
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            {title}
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-primary-500" />
        </div>
      )}
      {children}
    </section>
  )
}
