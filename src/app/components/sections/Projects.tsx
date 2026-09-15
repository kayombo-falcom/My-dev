import { developmentProjects } from '../../data/projects';
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal';
import { ArtworkSlideshow } from './ArtworkSlideshow';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="bg-background px-6 py-12 md:px-10 md:py-16 lg:px-16 xl:px-20">
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

        <div id="software-development" className="mt-12 scroll-mt-24">
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

        <div id="graphic-design" className="mt-16 scroll-mt-24 border-t border-border pt-12">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
              Graphic Design
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              A closer look at poster and artwork design work.
            </p>
          </Reveal>
          <Reveal delay={0.06} className="mt-6">
            <ArtworkSlideshow />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
