import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Hero } from '../../components/sections/Hero';
import { Reveal, RevealGroup, RevealItem } from '../../components/motion/Reveal';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { developmentProjects, getProjectTags } from '../../data/projects';
import { toneClasses } from '../../lib/tone';
import graphicDesignPreview from '../../../assets/posters/hy-sep26-1b.jpg';

const graphicDesignDisciplines = ['Logo Design', 'Posters', 'Banners', 'Icons', 'UI/UX'];

function FeaturedCard({
  href,
  image,
  imageAlt,
  imageBackground,
  label,
  labelToneClass,
  title,
  description,
  tags,
  tagToneClass,
}: {
  href: string;
  image: string;
  imageAlt: string;
  imageBackground?: 'white';
  label: string;
  labelToneClass: string;
  title: string;
  description: string;
  tags: string[];
  tagToneClass: string;
}) {
  const isWhiteBackground = imageBackground === 'white';

  return (
    <Link to={href} className="project-card group">
      <div className={`relative aspect-video overflow-hidden ${isWhiteBackground ? 'bg-white' : 'bg-muted'}`}>
        {!isWhiteBackground && (
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
          />
        )}
        <img
          src={image}
          alt={imageAlt}
          className={`relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 ${
            isWhiteBackground ? 'p-10' : ''
          }`}
        />
      </div>
      <div className="p-6">
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${labelToneClass}`}>{label}</p>
        <h3 className="mt-2 text-2xl">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((item) => (
            <Badge
              key={item}
              variant="outline"
              className={`rounded-full border-transparent text-xs ${tagToneClass}`}
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}

export function HomePage() {
  const featuredDevProject = developmentProjects.find((project) => project.title === 'NetWatch') ?? developmentProjects[0];

  return (
    <div className="bg-background">
      <Hero />

      <section className="border-t border-border px-6 py-14 md:px-10 md:py-16 lg:px-16 xl:px-20">
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
          <RevealItem>
            <FeaturedCard
              href="/projects#software-development"
              image={featuredDevProject.image}
              imageAlt={featuredDevProject.title}
              imageBackground={featuredDevProject.imageBackground}
              label="Software Development"
              labelToneClass="text-primary"
              title={featuredDevProject.title}
              description={featuredDevProject.description}
              tags={getProjectTags(featuredDevProject)}
              tagToneClass={toneClasses.primary}
            />
          </RevealItem>

          <RevealItem>
            <FeaturedCard
              href="/projects#graphic-design"
              image={graphicDesignPreview}
              imageAlt="Graphic design work"
              label="Graphic Design"
              labelToneClass="text-accent"
              title="Visual & Brand Design"
              description="Logo design, posters, banners, icons, and UI visuals crafted for clarity and brand consistency."
              tags={graphicDesignDisciplines}
              tagToneClass={toneClasses.accent}
            />
          </RevealItem>
        </RevealGroup>
      </section>

      <section className="border-t border-border px-6 py-14 md:px-10 md:py-16 lg:px-16 xl:px-20">
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
