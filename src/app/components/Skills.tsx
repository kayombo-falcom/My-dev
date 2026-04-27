import { Code2, Palette, Wrench } from 'lucide-react';

const skills = {
  development: {
    title: 'Development',
    icon: Code2,
    color: 'text-primary',
    items: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB']
  },
  design: {
    title: 'Design',
    icon: Palette,
    color: 'text-accent',
    items: ['Photoshop', 'Illustrator', 'UI/UX', 'Branding', 'Motion Design', 'Creative Direction']
  },
  tools: {
    title: 'Tools',
    icon: Wrench,
    color: 'text-primary',
    items: ['Git', 'Docker', 'AWS', 'VS Code', 'Webpack', 'CI/CD']
  }
};

export function Skills() {
  return (
    <section id="skills" className="bg-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="border-t border-[#ececec] pt-14">
          <div className="max-w-5xl">
            <div className="flex items-start gap-5">
              <span className="mt-2 h-12 w-1.5 bg-[#56b98b]" />
              <div>
                <h2 className="text-4xl font-semibold text-[#1f2937] md:text-5xl">What I do</h2>
                <p className="mt-5 text-lg leading-9 text-[#4b5563]">
                  I work across software development, interface design, and production tools to
                  create websites and digital products that are clear, practical, and professional.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {Object.values(skills).map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group flex h-full flex-col text-left"
              >
                <div className={`mb-5 inline-flex ${category.color}`}>
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1f2937]">{category.title}</h3>
                <p className="mt-3 text-base leading-8 text-[#4b5563]">
                  {category.title === 'Development' &&
                    'Frontend systems, APIs, and responsive web experiences built to be maintainable and reliable.'}
                  {category.title === 'Design' &&
                    'Visual direction, user interface structure, and brand-aligned design decisions that improve clarity.'}
                  {category.title === 'Tools' &&
                    'Practical workflows and modern tools that help projects stay organized and move smoothly.'}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#d8dee8] bg-[#f8fafc] px-4 py-2 text-sm text-[#334155]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
