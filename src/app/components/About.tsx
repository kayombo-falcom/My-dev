import {
  BriefcaseBusiness,
  GraduationCap,
  Hammer,
  Lightbulb,
  Target,
} from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiDocker,
  SiDjango,
  SiFigma,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbApi, TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from 'react-icons/tb';

const education = [
  {
    title: 'Software Development & Continuous Learning',
    description:
      'Building practical knowledge across front-end development, back-end systems, UI implementation, and modern web workflows through projects and ongoing study.',
  },
  {
    title: 'Graphic Design & UI/UX Practice',
    description:
      'Developing design thinking through interface work, branding, layout structure, typography, and visual communication for digital products.',
  },
];

const skills = [
  {
    title: 'Responsive Web Development',
    description:
      'Building websites and interfaces that work smoothly across desktop, tablet, and mobile devices.',
  },
  {
    title: 'Frontend Implementation',
    description:
      'Translating ideas and designs into clean, interactive, and user-friendly interfaces.',
  },
  {
    title: 'Backend Integration',
    description:
      'Connecting application logic, data flow, and APIs to support reliable functionality.',
  },
  {
    title: 'UI/UX Design Thinking',
    description:
      'Planning interfaces with clarity, usability, and structure to improve the user experience.',
  },
  {
    title: 'Graphic & Brand Design',
    description:
      'Creating visual materials such as logos, posters, and branding assets with clear communication.',
  },
  {
    title: 'Security Awareness',
    description:
      'Providing guidance, education, and awareness techniques that help users understand safer online behavior.',
  },
];

const tools = [
  {
    name: 'Python',
    description: 'Used for backend logic, scripting, and practical problem-solving.',
    icon: SiPython,
  },
  {
    name: 'Django',
    description: 'Framework for building structured, secure, and maintainable web applications.',
    icon: SiDjango,
  },
  {
    name: 'DRF',
    description: 'Used to create clear and scalable REST APIs with Django Rest Framework.',
    icon: TbApi,
  },
  {
    name: 'Docker',
    description: 'Helps package applications consistently across development environments.',
    icon: SiDocker,
  },
  {
    name: 'Next.js',
    description: 'Used to build fast React applications with modern routing and rendering features.',
    icon: SiNextdotjs,
  },
  {
    name: 'PostgreSQL',
    description: 'Used to manage structured application data with a reliable relational database system.',
    icon: SiPostgresql,
  },
  {
    name: 'React',
    description: 'Used to build interactive and component-based user interfaces.',
    icon: SiReact,
  },
  {
    name: 'TypeScript',
    description: 'Adds structure and safer development for modern JavaScript applications.',
    icon: SiTypescript,
  },
  {
    name: 'Tailwind CSS',
    description: 'Speeds up clean and consistent styling across the interface.',
    icon: SiTailwindcss,
  },
  {
    name: 'Figma',
    description: 'Used for interface planning, wireframes, and design collaboration.',
    icon: SiFigma,
  },
  {
    name: 'Adobe Photoshop',
    description: 'Used for image editing, poster work, and digital graphic production.',
    icon: TbBrandAdobePhotoshop,
  },
  {
    name: 'Adobe Illustrator',
    description: 'Used for vector design, logos, icons, and brand graphics.',
    icon: TbBrandAdobeIllustrator,
  },
  {
    name: 'Git',
    description: 'Supports version control and clean project workflow management.',
    icon: SiGit,
  },
  {
    name: 'GitHub',
    description: 'Used to manage repositories, collaboration, and project delivery.',
    icon: SiGithub,
  },
] satisfies Array<{ name: string; description: string; icon: IconType }>;

const experiences = [
  {
    title: 'Junior Software Developer',
    organization: 'IT Knowledge Hub',
    period: 'Oct 2024 - Oct 2025',
    description:
      'Built responsive web applications using Next.js, developed APIs with Django, and worked with PostgreSQL databases, with focus on clean code, performance, and secure authentication.',
  },
  {
    title: 'Graphics Designer',
    organization: 'IT Knowledge Hub',
    period: 'Jul 2023 - Dec 2023',
    description:
      'Designed logos, banners, and marketing materials while maintaining brand consistency and creating clear, engaging visuals for campaigns.',
  },
  {
    title: 'Graphics Designer',
    organization: 'Trust Microfinance Company Limited',
    period: '2024',
    description:
      'Created digital and print designs that supported branding and communication, and worked with teams to produce promotional content.',
  },
  {
    title: 'IT Support Trainee',
    organization: 'TANESCO',
    period: '2021 - 2022',
    description:
      'Assisted with network setup, maintenance, and troubleshooting, and supported stable and secure system operations.',
  },
];

const goals = [
  'Grow into a stronger full-stack developer who can deliver complete digital products with confidence.',
  'Build professional user experiences that combine good engineering with clear and thoughtful design.',
  'Keep improving technical depth, design quality, and communication through real-world project work.',
];

const sectionCards = [
  {
    title: 'Education',
    description:
      'A growing foundation in software development, UI/UX, and design built through continuous practice and hands-on projects.',
    icon: GraduationCap,
    content: (
      <div className="space-y-4">
        {education.map(({ title, description }) => (
          <div key={title} className="rounded-2xl border border-border bg-card/70 p-5">
            <h4 className="text-base text-foreground">{title}</h4>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Skills',
    description: 'Core abilities applied across development, design, and communication.',
    icon: Lightbulb,
    content: (
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map(({ title, description }) => (
          <div key={title} className="rounded-2xl border border-border bg-card/70 p-5">
            <h4 className="text-sm text-foreground">{title}</h4>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Tools',
    description: 'Common tools and technologies used to design, build, and refine digital work.',
    icon: Hammer,
    content: (
      <div className="grid gap-4 sm:grid-cols-2">
        {tools.map(({ name, description, icon: Icon }) => (
          <div key={name} className="rounded-2xl border border-border bg-card/70 p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-primary/10 p-2 text-primary">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <h4 className="text-sm text-foreground">{name}</h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Experience',
    description: 'Main areas of work and contribution across the digital space.',
    icon: BriefcaseBusiness,
    content: (
      <div className="space-y-4">
        {experiences.map(({ title, organization, period, description }) => (
          <div key={title} className="rounded-2xl border border-border bg-card/70 p-5">
            <h4 className="text-base text-foreground">{title}</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              {organization} ({period})
            </p>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Goals',
    description: 'Professional direction and the kind of impact I want to keep building toward.',
    icon: Target,
    content: (
      <ul className="space-y-3">
        {goals.map((goal) => (
          <li
            key={goal}
            className="rounded-2xl border border-border bg-card/70 px-5 py-4 text-sm leading-7 text-muted-foreground"
          >
            {goal}
          </li>
        ))}
      </ul>
    ),
  },
];

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-4xl">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-12 w-1.5 bg-[#e2b48c]" />
            <div>
              <h2 className="text-4xl font-semibold text-foreground md:text-5xl">About Me</h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                Building digital solutions that are clear, useful, and professional.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                I work across software development, design, and security awareness to create
                modern experiences that look polished, function reliably, and serve users well.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-12">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">
              Professional Profile
            </p>
            <h3 className="mt-3 max-w-3xl text-2xl leading-tight text-foreground md:text-3xl">
              Junior Software Developer, Graphic Designer, and Security Awareness Specialist
            </h3>
            <p className="mt-5 max-w-4xl text-base leading-8 text-muted-foreground md:text-lg">
              My work combines technical development, thoughtful design, and practical digital
              awareness. I aim to create solutions that are easy to use, visually clear, and built
              with care for both user experience and reliability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {sectionCards.map(({ title, description, icon: Icon, content }) => (
              <article
                key={title}
                className="glass-panel rounded-[28px] border border-border px-6 py-6 md:px-7"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
                  </div>
                </div>

                <div className="mt-6">{content}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
