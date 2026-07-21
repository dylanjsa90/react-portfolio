export default function ProjectCard({ title, description, tags, liveUrl, repoUrl }) {
  return (
    <div className="flex flex-col border border-line dark:border-line-dark p-6 hover:border-ochre dark:hover:border-amber transition-colors">
      <h3 className="font-mono text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-4">
        {description}
      </p>
      <p className="font-mono text-xs text-slate-500 dark:text-graphite mb-4">
        {tags.map(tag => `#${tag.toLowerCase().replace(/\s+/g, '-')}`).join(' ')}
      </p>
      <div className="flex gap-4 mt-auto">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-medium text-ochre dark:text-amber hover:underline"
          >
            [github -&gt;]
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm font-medium text-ochre dark:text-amber hover:underline"
          >
            [live -&gt;]
          </a>
        )}
      </div>
    </div>
  )
}
