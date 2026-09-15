import { Eye, ExternalLink, Github } from 'lucide-react';
import { isDevProject, getProjectTags, type DevProject, type DesignProject } from '../../data/projects';
import { toneClasses } from '../../lib/tone';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export function ProjectCard({ project }: { project: DevProject | DesignProject }) {
  const isDev = isDevProject(project);

  return (
    <div className="project-card group">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl">{project.title}</h3>
        <p className="mt-3 mb-5 text-sm leading-7 text-muted-foreground">{project.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {getProjectTags(project).map((item) => (
            <Badge
              key={item}
              variant="outline"
              className={`rounded-full border-transparent text-xs ${isDev ? toneClasses.primary : toneClasses.accent}`}
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
