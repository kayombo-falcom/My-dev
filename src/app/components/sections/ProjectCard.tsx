import { isDevProject, getProjectTags, type DevProject, type DesignProject } from '../../data/projects';
import { toneClasses } from '../../lib/tone';
import { Badge } from '../ui/badge';

export function ProjectCard({ project }: { project: DevProject | DesignProject }) {
  const isDev = isDevProject(project);
  const isWhiteBackground = project.imageBackground === 'white';

  return (
    <div className="project-card group">
      <div className={`relative aspect-video overflow-hidden ${isWhiteBackground ? 'bg-white' : 'bg-muted'}`}>
        {!isWhiteBackground && (
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
          />
        )}
        <img
          src={project.image}
          alt={project.title}
          className={`relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-110 ${
            isWhiteBackground ? 'p-10' : ''
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl">{project.title}</h3>
        <p className="mt-3 mb-5 text-sm leading-7 text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2">
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
      </div>
    </div>
  );
}
