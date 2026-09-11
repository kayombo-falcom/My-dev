import {
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
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbApi, TbBrandAdobeIllustrator, TbBrandAdobePhotoshop } from 'react-icons/tb';
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal';

const education = [
  {
    institute: 'Institute of Accountancy Arusha',
    program: 'Bachelor of Science in Cyber Security',
    studied:
      'Built a strong foundation in cyber security, digital protection, and safe technology practices through academic study and practical learning.',
  },
  {
    institute: 'IT Knowledge Hub Tanzania',
    program: 'Software Engineering',
    studied:
      'Developed software engineering skills through hands-on projects, modern development tools, and practical implementation work.',
  },
];

const certificates = [
  'Bachelor of Science in Cyber Security',
  'Certificate of Professional Associate in IT',
  'Certificate of Scrum Methodology',
  'Certificate of Presentation Skills',
  'Certificate of Customer Focus',
];

const skills = [
  {
    title: 'Responsive Web Development',
    description:
      'Building websites and interfaces that perform reliably across desktop, tablet, and mobile devices.',
  },
  {
    title: 'Frontend Implementation',
    description:
      'Translating designs into clean, interactive, and user-friendly interfaces.',
  },
  {
    title: 'Backend Integration',
    description:
      'Connecting application logic, data, and APIs to deliver reliable functionality.',
  },
  {
    title: 'UI/UX Design Thinking',
    description:
      'Structuring interfaces around clarity and usability to improve the overall user experience.',
  },
  {
    title: 'Graphic & Brand Design',
    description:
      'Creating logos, posters, and branding assets that communicate clearly and consistently.',
  },
  {
    title: 'Security Awareness',
    description:
      'Educating users on safer online behavior through clear, practical guidance.',
  },
];

const tools = [
  { name: 'Python', description: 'Applied for backend logic, scripting, and automation tasks.', icon: SiPython },
  {
    name: 'Django',
    description: 'Framework for building structured, secure, and maintainable web applications.',
    icon: SiDjango,
  },
  { name: 'DRF', description: 'Builds clear, scalable REST APIs on top of Django.', icon: TbApi },
  {
    name: 'Docker',
    description: 'Packages applications consistently across development and deployment environments.',
    icon: SiDocker,
  },
  {
    name: 'Next.js',
    description: 'Builds fast React applications with modern routing and rendering.',
    icon: SiNextdotjs,
  },
  {
    name: 'NestJS',
    description: 'Builds scalable, well-structured server-side Node.js applications.',
    icon: SiNestjs,
  },
  {
    name: 'PostgreSQL',
    description: 'Manages structured application data through a reliable relational database.',
    icon: SiPostgresql,
  },
  { name: 'React', description: 'Builds interactive, component-based user interfaces.', icon: SiReact },
  {
    name: 'JavaScript',
    description: 'Core language for interactive and dynamic web functionality.',
    icon: SiJavascript,
  },
  {
    name: 'TypeScript',
    description: 'Adds structure and type safety to modern JavaScript applications.',
    icon: SiTypescript,
  },
  {
    name: 'Tailwind CSS',
    description: 'Enables fast, consistent styling across the interface.',
    icon: SiTailwindcss,
  },
  {
    name: 'Figma',
    description: 'Used for interface planning, wireframes, and design collaboration.',
    icon: SiFigma,
  },
  {
    name: 'Adobe Photoshop',
    description: 'Used for image editing and digital graphic production.',
    icon: TbBrandAdobePhotoshop,
  },
  {
    name: 'Adobe Illustrator',
    description: 'Used for vector design, logos, and brand graphics.',
    icon: TbBrandAdobeIllustrator,
  },
  { name: 'Git', description: 'Supports version control and structured project workflows.', icon: SiGit },
  {
    name: 'GitHub',
    description: 'Manages repositories, collaboration, and project delivery.',
    icon: SiGithub,
  },
] satisfies Array<{ name: string; description: string; icon: IconType }>;

const experiences = [
  {
    title: 'Software Developer',
    organization: 'Quadraat Global Software House',
    period: 'May 2026 - Present',
    description:
      'Developing and maintaining web applications, working across frontend and backend to deliver features that are functional, well-structured, and aligned with project requirements.',
  },
  {
    title: 'Junior Software Developer',
    organization: 'IT Knowledge Hub',
    period: 'Nov 2025 - Apr 2026',
    description:
      'Built responsive web applications using Next.js, developed APIs with Django, and worked with PostgreSQL databases, with focus on clean code, performance, and secure authentication.',
  },
  {
    title: 'Graphics Designer',
    organization: 'IT Knowledge Hub',
    period: 'Dec 2025',
    description:
      'Designed logos, banners, and marketing materials while maintaining brand consistency and creating clear, engaging visuals for campaigns.',
  },
  {
    title: 'Graphics Designer',
    organization: 'Trust Microfinance Company Limited',
    period: 'Sep 2024 - Sep 2025',
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
  'To design and build secure, reliable, and user-friendly digital solutions that combine strong technical foundations with clear, effective design.',
  'To keep growing as a developer by writing clean, maintainable code and contributing to projects that create real value for users and teams.',
];

const toneClasses = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent',
};

function CardHeading({
  icon: Icon,
  tone,
  title,
  description,
}: {
  icon: IconType | typeof GraduationCap;
  tone: keyof typeof toneClasses;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className={`rounded-2xl p-3 ${toneClasses[tone]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">{title}</p>
        <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-12 md:px-10 md:py-16 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="max-w-5xl">
            <div className="flex items-start gap-4">
              <span className="accent-bar mt-2 h-12 w-1.5 rounded-full" />
              <div>
                <h2 className="text-4xl font-semibold text-foreground md:text-5xl">About Me</h2>
                <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                  Software Developer focused on building reliable, user-friendly digital solutions.
                </p>
                <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                  I combine development, design, and security awareness to deliver applications
                  that are functional, secure, and easy to use.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 border-t border-border pt-10">
            <div className="max-w-5xl">
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Profile</p>
              <h3 className="mt-3 text-2xl leading-tight text-foreground md:text-3xl">
                Software Developer, Graphic Designer, and Security Awareness Specialist
              </h3>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                I combine full-stack development, visual design, and cybersecurity to build
                digital solutions that are functional, intuitive, and secure. I work across both
                frontend and backend development, with a strong focus on clean architecture,
                performance, usability, and responsive design.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                I also apply visual and UI/UX principles to create interfaces that are modern,
                consistent, and easy to navigate. With a cybersecurity mindset, I consider
                security and best practices throughout the development process, helping create
                solutions that are not only visually engaging but also reliable, scalable, and
                user-focused.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 border-t border-border pt-10">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Experience</p>
            <h3 className="mt-3 text-2xl text-foreground md:text-3xl">
              Roles in software development, design, and IT support.
            </h3>
          </Reveal>

          <div className="relative mt-10 max-w-4xl mx-auto">
            <span className="absolute top-0 bottom-0 left-4 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

            <RevealGroup className="space-y-10 md:space-y-6">
              {experiences.map(({ title, organization, period, description }, index) => {
                const isEven = index % 2 === 0;
                return (
                  <RevealItem
                    key={`${title}-${organization}-${period}`}
                    className="relative pl-14 md:grid md:grid-cols-[1fr_2.5rem_1fr] md:items-start md:gap-x-6 md:pl-0"
                  >
                    <span className="absolute top-1.5 left-4 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-primary md:static md:top-6 md:col-start-2 md:mx-auto md:translate-x-0" />

                    <div
                      className={`rounded-2xl border border-border bg-card/70 p-5 transition-colors hover:border-primary/30 ${
                        isEven ? 'md:col-start-1' : 'md:col-start-3'
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-primary">{period}</p>
                      <h4 className="mt-2 text-lg text-foreground">{title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{organization}</p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-10">
          <RevealGroup className="grid gap-6">
            <RevealItem>
              <article className="glass-panel h-full rounded-[28px] border border-border px-6 py-6 md:px-7">
                <CardHeading
                  icon={GraduationCap}
                  tone="primary"
                  title="Education"
                  description="Academic and practical training that supports my work in cyber security and software development."
                />

                <div className="mt-6 space-y-4">
                  {education.map(({ institute, program, studied }) => (
                    <div key={program} className="rounded-2xl border border-border bg-card/70 p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-primary">{institute}</p>
                      <h4 className="mt-2 text-base text-foreground">{program}</h4>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{studied}</p>
                    </div>
                  ))}

                  <div className="rounded-2xl border border-border bg-card/70 p-5">
                    <p className="text-xs uppercase tracking-[0.18em] text-primary">Certificates</p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {certificates.map((certificate) => (
                        <li
                          key={certificate}
                          className="rounded-xl bg-background/70 px-4 py-3 text-sm text-muted-foreground"
                        >
                          {certificate}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </RevealItem>

            <RevealItem>
              <article className="glass-panel h-full rounded-[28px] border border-border px-6 py-6 md:px-7">
                <CardHeading
                  icon={Lightbulb}
                  tone="secondary"
                  title="Skills"
                  description="Core abilities applied across development, design, and communication."
                />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {skills.map(({ title, description }) => (
                    <div key={title} className="rounded-2xl border border-border bg-card/70 p-5">
                      <h4 className="text-sm text-foreground">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
                    </div>
                  ))}
                </div>
              </article>
            </RevealItem>
          </RevealGroup>

          <Reveal delay={0.06} className="mt-6">
            <article className="glass-panel rounded-[28px] border border-border px-6 py-6 md:px-7">
              <CardHeading
                icon={Hammer}
                tone="accent"
                title="Tools"
                description="Common tools and technologies used to design, build, and refine digital work."
              />

              <RevealGroup className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {tools.map(({ name, description, icon: Icon }) => (
                  <RevealItem
                    key={name}
                    className="group relative flex flex-col items-center gap-2 rounded-2xl border border-border bg-card/70 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)]"
                  >
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-xs text-foreground">{name}</span>

                    <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-52 -translate-x-1/2 translate-y-1 rounded-2xl border border-primary/30 bg-card/95 px-4 py-3 text-left text-xs leading-6 text-muted-foreground opacity-0 shadow-[0_20px_60px_rgba(19,18,38,0.18)] backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="mb-1 block text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                        {name}
                      </span>
                      {description}
                      <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-card/95" />
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </article>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <article className="glass-panel rounded-[28px] border border-border px-6 py-6 md:px-7">
              <CardHeading
                icon={Target}
                tone="primary"
                title="Goals"
                description="The direction I am continuing to build toward in my career and work."
              />

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {goals.map((goal) => (
                  <p
                    key={goal}
                    className="rounded-2xl border border-border bg-card/70 px-5 py-4 text-sm leading-7 text-muted-foreground"
                  >
                    {goal}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
