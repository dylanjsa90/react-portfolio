import SectionWrapper from '../ui/SectionWrapper'
import ProjectCard from '../ui/ProjectCard'

export default function Projects({ projects }) {
  return (
    <SectionWrapper id="projects" title="Projects" className="bg-slate-50 dark:bg-slate-800/30">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </SectionWrapper>
  )
}
