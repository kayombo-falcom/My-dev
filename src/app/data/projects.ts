export type DevProject = {
  id: number;
  category: 'development';
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
};

export type DesignProject = {
  id: number;
  category: 'design';
  title: string;
  description: string;
  image: string;
  tools: string[];
  view: string;
};

export type Project = DevProject | DesignProject;

export function isDevProject(project: Project): project is DevProject {
  return project.category === 'development';
}

export function getProjectTags(project: Project): string[] {
  return isDevProject(project) ? project.tech : project.tools;
}

export const developmentProjects: DevProject[] = [
  {
    id: 1,
    category: 'development',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    demo: '#',
    github: '#',
  },
  {
    id: 2,
    category: 'development',
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, kanban boards, and team chat.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    demo: '#',
    github: '#',
  },
  {
    id: 3,
    category: 'development',
    title: 'Portfolio CMS',
    description: 'Content management system for creative professionals with drag-and-drop interface.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tech: ['React', 'Express', 'AWS S3', 'GraphQL'],
    demo: '#',
    github: '#',
  },
];
