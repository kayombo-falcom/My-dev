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
    items: ['Figma', 'Photoshop', 'Illustrator', 'UI/UX', 'Branding', 'Motion Design']
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
    <section id="skills" className="py-20 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(skills).map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`inline-flex p-4 rounded-xl bg-card mb-6 ${category.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-card text-sm border border-border hover:border-primary/50 transition-all duration-300"
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
