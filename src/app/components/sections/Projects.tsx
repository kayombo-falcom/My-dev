import { Eye, ExternalLink, Github } from 'lucide-react';
import { developmentProjects, designProjects, type DevProject, type DesignProject } from '../../data/projects';
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

function ProjectCard({ project }: { project: DevProject | DesignProject }) {
  const isDev = project.category === 'development';

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)]">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl">{project.title}</h3>
        <p className="mt-3 mb-5 text-sm leading-7 text-muted-foreground">{project.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {(isDev ? project.tech : project.tools).map((item) => (
            <Badge
              key={item}
              variant="outline"
              className={`rounded-full border-transparent text-xs ${
                isDev ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
              }`}
            >
              {item}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex gap-3 pt-2">
          {isDev ? (
            <>
              <Button asChild className="flex-1 rounded-lg">
                <a href={project.demo}>
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-lg">
                <a href={project.github} aria-label={`${project.title} on GitHub`}>
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </>
          ) : (
            <Button asChild className="flex-1 rounded-lg">
              <a href={project.view}>
                <Eye className="h-4 w-4" />
                View Project
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="bg-background px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="max-w-4xl">
            <div className="flex items-start gap-4">
              <span className="accent-bar mt-2 h-12 w-1.5 rounded-full" />
              <div>
                <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
                  Featured Work
                </h2>
                <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                  Selected work across software development and graphic design.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
              Software Development
            </h3>
          </Reveal>
          <RevealGroup className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {developmentProjects.map((project) => (
              <RevealItem key={project.id}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-16 border-t border-border pt-12">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Graphic Design
            </h3>
          </Reveal>
          <RevealGroup className="mt-6 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {designProjects.map((project) => (
              <RevealItem key={project.id}>
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
