import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demo: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, kanban boards, and team chat.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    demo: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Portfolio CMS',
    description: 'Content management system for creative professionals with drag-and-drop interface.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tech: ['React', 'Express', 'AWS S3', 'GraphQL'],
    demo: '#',
    github: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:px-8">
      <div className="section-shell">
        <div className="section-header">
          <span className="section-kicker">Featured Work</span>
          <h2 className="section-title">Selected projects with product thinking and visual range.</h2>
          <p className="section-subtitle">
            A few examples of how I combine interface design, frontend architecture, and brand-aware
            presentation into one cohesive result.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-panel group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-2xl">{project.title}</h3>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    0{project.id}
                  </span>
                </div>
                <p className="mb-5 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-2">
                  <a
                    href={project.demo}
                    className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2.5 text-sm transition-all duration-300 hover:bg-secondary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
