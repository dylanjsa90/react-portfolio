export default function Hero({ name, tagline, cta, avatarUrl }) {
  return (
    <section className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-20">
        <div className="text-center md:text-left">
          <p className="text-primary-500 font-medium mb-2 tracking-wide uppercase text-sm">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-4">
            {name}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
            {tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href={cta.href}
              className="px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-colors shadow-sm"
            >
              {cta.label}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="shrink-0">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover ring-4 ring-primary-100 dark:ring-slate-700 shadow-xl"
            />
          ) : (
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-xl ring-4 ring-primary-100 dark:ring-slate-700">
              <span className="text-6xl md:text-7xl font-bold text-white select-none">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
