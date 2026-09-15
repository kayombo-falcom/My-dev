import portfolioPreview from '../../assets/portfolio-preview.jpg';
import netwatchLogo from '../../assets/netwatch-logo.png';

export type DevProject = {
  id: number;
  category: 'development';
  title: string;
  description: string;
  image: string;
  imageBackground?: 'white';
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
  imageBackground?: 'white';
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
    title: 'NetWatch',
    description:
      'Network monitoring and investigation system that discovers and identifies connected devices, tracks Wi-Fi signal and bandwidth, and surfaces alerts through a live dashboard.',
    image: netwatchLogo,
    imageBackground: 'white',
    tech: ['Next.js', 'Django', 'PostgreSQL'],
    demo: '#',
    github: '#',
  },
  {
    id: 3,
    category: 'development',
    title: 'Personal Portfolio',
    description:
      'This portfolio site — a responsive showcase of software development and graphic design work, with dark/light theming and smooth animations.',
    image: portfolioPreview,
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demo: '/',
    github: 'https://github.com/kayombo-falcom/My-dev',
  },
];
