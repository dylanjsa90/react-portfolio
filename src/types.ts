export interface NavMeta {
  name: string
  navLinks: string[]
}

export interface HeroData {
  name: string
  tagline: string
  avatarUrl: string | null
  cta: { label: string; href: string }
}

export interface AboutData {
  bio: string
  highlights: string[]
}

export interface SkillCategory {
  label: string
  skills: string[]
}

export interface SkillsData {
  categories: SkillCategory[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  repoUrl: string | null
  liveUrl: string | null
  imageUrl: string | null
}

export interface ProjectsData {
  projects: Project[]
}

export interface Job {
  role: string
  company: string
  period: string
  bullets: string[]
}

export interface ExperienceData {
  jobs: Job[]
}

export interface Social {
  platform: string
  url: string
}

export interface ContactData {
  email: string
  socials: Social[]
}
