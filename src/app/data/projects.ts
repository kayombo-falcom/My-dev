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

export const designProjects: DesignProject[] = [
  {
    id: 4,
    category: 'design',
    title: 'Brand Identity — Trust Microfinance',
    description:
      'Logo system, color palette, and marketing collateral built for a consistent brand presence across print and digital.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
    tools: ['Illustrator', 'Photoshop'],
    view: '#',
  },
  {
    id: 5,
    category: 'design',
    title: 'Campaign Posters — IT Knowledge Hub',
    description:
      'A poster and banner series for marketing campaigns, designed for clear messaging and brand consistency.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tools: ['Photoshop', 'Illustrator'],
    view: '#',
  },
  {
    id: 6,
    category: 'design',
    title: 'Portfolio Visual System',
    description:
      'Typography, color, and UI kit exploration used to shape the visual language of this portfolio site.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop&sat=-20',
    tools: ['Figma', 'Illustrator'],
    view: '#',
  },
];

export const projects: Project[] = [...developmentProjects, ...designProjects];
