import { Code2, LayoutTemplate, ShieldCheck } from 'lucide-react';

const focusAreas = [
  {
    title: 'Software Development',
    description:
      'I build responsive and reliable web applications across front-end and back-end workflows, with attention to performance, maintainability, and usability.',
    icon: Code2,
  },
  {
    title: 'Graphic & UI/UX Design',
    description:
      'My design work includes interfaces, logos, posters, branding, and banners, with a focus on clarity, structure, and strong visual communication.',
    icon: LayoutTemplate,
  },
  {
    title: 'Security Awareness',
    description:
      'I promote safe online practices and support simple, practical habits that help users protect data and reduce avoidable digital risks.',
    icon: ShieldCheck,
  },
];

const principles = [
  'Clear communication and structured problem-solving',
  'Clean code that is simple to understand and maintain',
  'Professional visual design with strong usability',
  'Reliable collaboration, accountability, and continuous learning',
];

export function About() {
  return (
    <section id="about" className="bg-background px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-4xl">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-12 w-1.5 bg-[#56b98b]" />
            <div>
              <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
                About Me
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
                Building digital solutions that are clear, useful, and safe.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
            I work across software development, design, and security awareness to create modern
            experiences that look professional, function reliably, and serve users well.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-12">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-12">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Profile Summary</p>
              <h3 className="mt-3 max-w-3xl text-2xl leading-tight md:text-3xl">
                Junior Software Developer, Graphic Designer, and Security Awareness Specialist
              </h3>

              <div className="mt-8 space-y-5">
                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  I am a junior software developer and graphic designer with a focus on security
                  awareness. I enjoy building digital solutions that are functional, visually
                  appealing, and safe for users.
                </p>

                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  I work on both front-end and back-end development, creating responsive and
                  reliable web applications that perform well across different devices. I focus on
                  writing clean and simple code that is easy to understand and maintain, and I
                  enjoy turning ideas into real systems that solve everyday problems.
                </p>

                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  Alongside development, I also work in graphic design. My work includes UI/UX
                  design, logos, posters, branding, and banners. I aim to create designs that are
                  clear, modern, and easy to use, with careful attention to layout, color, and
                  structure.
                </p>

                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  I also work as a Security Awareness Specialist, helping promote safe online
                  practices and practical ways for users to protect their data. I believe
                  thoughtful design, dependable systems, and good security habits should work
                  together.
                </p>

                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  I am always learning and improving my skills by exploring new tools,
                  technologies, and design ideas. I am focused, reliable, open to feedback, and
                  committed to creating solutions that are simple, professional, and effective.
                </p>
              </div>
            </div>

            <aside className="border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Core Focus</p>
                <div className="mt-5 space-y-5">
                  {focusAreas.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="flex gap-4">
                      <div className="mt-1 rounded-xl bg-primary/10 p-2 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base">{title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Working Principles</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                  {principles.map((principle) => (
                    <li key={principle} className="border-b border-border/60 pb-3 last:border-b-0 last:pb-0">
                      {principle}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
