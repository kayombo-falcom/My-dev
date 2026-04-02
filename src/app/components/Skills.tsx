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
    <section id="skills" className="bg-card/40 px-6 py-24 md:px-8">
      <div className="section-shell">
        <div className="section-header">
          <span className="section-kicker">Capabilities</span>
          <h2 className="section-title">The toolkit behind the work.</h2>
          <p className="section-subtitle">
            Strategy, interface craft, and implementation all live in the same workflow, which keeps
            projects sharper and faster.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {Object.values(skills).map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="glass-panel group flex h-full flex-col p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/35"
              >
                <div className={`mb-6 inline-flex rounded-2xl bg-background/80 p-4 ${category.color}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl">{category.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {category.title === 'Development' && 'Frontend systems, APIs, and scalable product foundations.'}
                  {category.title === 'Design' && 'Visual language, interface direction, and brand-consistent experiences.'}
                  {category.title === 'Tools' && 'Delivery workflows that keep builds stable and teams moving.'}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="mt-3 rounded-full border border-border bg-background/75 px-4 py-2 text-sm transition-all duration-300 group-hover:border-primary/25"
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
