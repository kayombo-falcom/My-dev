import { Award, Heart, User } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-8">
      <div className="section-shell">
        <div className="section-header">
          <span className="section-kicker">About</span>
          <h2 className="section-title">A hybrid practice shaped by development, design, and storytelling.</h2>
          <p className="section-subtitle">
            I work across interface design and engineering so ideas keep their character all the
            way from concept to production.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(18rem,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
          <div className="glass-panel relative overflow-hidden p-8 md:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
            <div className="relative flex aspect-[4/5] items-end justify-between rounded-[24px] border border-border bg-background/70 p-6">
              <User className="h-28 w-28 text-primary md:h-36 md:w-36" />
              <div className="max-w-[13rem] text-right">
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Approach</p>
                <p className="mt-3 text-lg leading-7">
                  Clean systems, strong mood, and details people actually notice.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-1">
            <p className="text-lg leading-8 text-muted-foreground">
              I'm a passionate Full Stack Developer and Graphic Designer with over 5 years of experience
              creating seamless digital experiences. I bridge the gap between development and design,
              ensuring every project is both functional and visually stunning.
            </p>

            <p className="text-lg leading-8 text-muted-foreground">
              My expertise spans from crafting responsive web applications to designing compelling
              visual identities. I believe great products are born from the perfect marriage of
              beautiful design and robust code.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="glass-panel flex h-full flex-col p-6">
                <Award className="mb-3 h-8 w-8 text-primary" />
                <h3 className="text-3xl">50+</h3>
                <p className="mt-2 text-sm text-muted-foreground">Projects completed across web and brand work</p>
              </div>
              <div className="glass-panel flex h-full flex-col p-6">
                <Heart className="mb-3 h-8 w-8 text-accent" />
                <h3 className="text-3xl">40+</h3>
                <p className="mt-2 text-sm text-muted-foreground">Client partnerships built on clarity and trust</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
