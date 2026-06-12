export const meta = {
  name: 'Dylan Sanders',
  navLinks: ['about', 'skills', 'projects', 'experience', 'contact'],
}

export const hero = {
  name: 'Dylan Sanders',
  tagline: 'Full-Stack Engineer building fast, reliable software.',
  avatarUrl: null,
  cta: { label: 'View My Work', href: '#projects' },
}

export const about = {
  bio: "I'm a full-stack engineer who loves crafting clean APIs and intuitive UIs. I care about code that's easy to read, easy to change, and actually works. When I'm not writing software, you'll find me gaming or tinkering with side projects.",
  highlights: [
    'Full-stack web development (React, Python/FastAPI)',
    'Database design & optimization (PostgreSQL, Redis)',
    'REST API architecture with JWT authentication',
    'CI/CD pipelines and cloud infrastructure',
  ],
}

export const skills = {
  categories: [
    {
      label: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Next.js'],
    },
    {
      label: 'Backend',
      skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'JWT Auth', 'SQLAlchemy'],
    },
    {
      label: 'Database',
      skills: ['PostgreSQL', 'Redis', 'SQL', 'Alembic', 'MongoDB'],
    },
    {
      label: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'GitHub Actions', 'Linux', 'Vite', 'npm', 'Bash'],
    },
  ],
}

export const projects = {
  projects: [
    {
      title: 'Games API',
      description:
        'A RESTful backend service for game-related data with user authentication, PostgreSQL persistence, and Redis caching. Built with FastAPI and SQLAlchemy.',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'JWT'],
      repoUrl: 'https://github.com/dylanjsa90',
      liveUrl: null,
      imageUrl: null,
    },
    {
      title: 'Portfolio Site',
      description:
        'This portfolio — a single-page React app with smooth-scroll navigation, dark mode, and fully static content. Built with Vite and Tailwind CSS.',
      tags: ['React', 'Vite', 'Tailwind CSS'],
      repoUrl: 'https://github.com/dylanjsa90',
      liveUrl: null,
      imageUrl: null,
    },
    {
      title: 'Classic Snake',
      description:
        'Try to earn a high score with your 5 daily chances of the classic snake game',
      tags: ['React.js', 'Games', '5 chances per day'],
      repoUrl: "https://github.com/dylanjsa90/snake-game",
      liveUrl: "https://monumental-chaja-a9b3e1.netlify.app/",
      imageUrl: null,
    },
  ],
}

export const experience = {
  jobs: [
    {
      role: 'Consultant: Software Engineer',
      company: 'Plebspeaks',
      period: '2026',
      bullets: [
        'Architectural review',
        'Implemented real-time messaging',
        'Designed database schemas with SQLAlchemy and managed migrations with Alembic',
        'Improved API response times with Redis caching layer',
      ],
    },
    {
      role: 'Senior Software Engineer',
      company: 'Likewise, Inc.',
      period: '2022 - 2025',
      bullets: [
        'Built and maintained REST APIs serving production traffic',
        'Optimized web app for SEO to boost organic traffic',
        'Helped monetize web traffic with programatic ad serving',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Likewise, Inc.',
      period: '2019 - 2022',
      bullets: [
        'Developed React frontends consuming internal APIs',
        'Collaborated with management and design to implement new core features.',
        'Wrote unit and integration tests with high coverage',
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: '6 Degree Labs',
      period: '2017 - 2019',
      bullets: [
        'Developed a consumer facing Angular application',
        'Contributed to the backend REST APIs Node.js/express',
        'Helped design database schemas (Mongoose.js) for the MongoDB database',
        'Collaborated with design team on component library',
      ],
    },
  ],
}

export const contact = {
  email: 'dylanjsanders1@gmail.com',
  formEnabled: false,
  socials: [
    { platform: 'GitHub', url: 'https://github.com/dylanjsanders1' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/dylanjsanders' },
    { platform: 'Email', url: 'mailto:dylanjsanders1@gmail.com' },
  ],
}
