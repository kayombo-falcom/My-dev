import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Hero } from '../../components/sections/Hero';
import { Reveal, RevealGroup, RevealItem } from '../../components/motion/Reveal';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { developmentProjects, designProjects } from '../../data/projects';

export function HomePage() {
  const featuredProjects = [developmentProjects[0], designProjects[0]];

  return (
    <div className="bg-background">
      <Hero />

      <section className="border-t border-border px-6 py-14 md:px-10 md:py-16 xl:px-14">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="accent-bar mt-2 h-12 w-1.5 rounded-full" />
              <div>
                <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                  Featured Work
                </h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">
                  A quick look at recent projects.
                </p>
              </div>
            </div>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <RevealItem key={project.id}>
              <Link
                to="/projects"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                    project.category === 'development' ? 'text-primary' : 'text-accent'
                  }`}>
                    {project.category === 'development' ? 'Software Development' : 'Graphic Design'}
                  </p>
                  <h3 className="mt-2 text-2xl">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(project.category === 'development' ? project.tech : project.tools).map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className={`rounded-full border-transparent text-xs ${
                          project.category === 'development'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-accent/10 text-accent'
                        }`}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="border-t border-border px-6 py-14 md:px-10 md:py-16 xl:px-14">
        <Reveal>
          <div className="glass-panel flex flex-col items-center gap-6 rounded-[28px] border border-border px-8 py-12 text-center">
            <h2 className="max-w-2xl text-2xl font-semibold text-foreground md:text-3xl">
              Have a project in mind? Let's build it together.
            </h2>
            <Button asChild size="lg" className="group rounded-full px-8">
              <Link to="/reach-me">
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
