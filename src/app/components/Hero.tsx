import { Link } from 'react-router';
import { ArrowRight, Code2, Github, ImageIcon, Linkedin, Mail, Palette } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-6 md:px-8 md:py-8">
      <div className="section-shell relative">
        <div className="pointer-events-none absolute inset-x-6 top-24 h-64 rounded-full bg-primary/12 blur-3xl md:inset-x-24" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 grid-sheen opacity-30 [mask-image:linear-gradient(180deg,white,transparent)]" />

        <div className="relative z-10 grid min-h-[70vh] items-center gap-10 py-14 md:min-h-[72vh] md:py-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-14">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-4 py-2 text-sm shadow-sm backdrop-blur">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Welcome to my portfolio</span>
              <Palette className="h-4 w-4 text-accent" />
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.32em] text-muted-foreground">Home</p>
            <h1 className="mt-4 max-w-4xl text-4xl leading-[1.02] md:text-6xl lg:text-7xl">
              Hi, I'm [Your Name]
            </h1>

            <h2 className="mt-4 max-w-3xl text-xl leading-tight text-foreground/90 md:text-3xl">
              Software Developer | UI/UX &amp; Graphic Designer
            </h2>

            <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-muted-foreground md:text-lg">
              <p>
                I specialize in designing and developing scalable, high-performance web applications
                using modern technologies and industry best practices. My expertise includes
                full-stack development, API integration, database management, and system optimization,
                ensuring secure, efficient, and maintainable solutions that meet both user and
                business requirements.
              </p>
              <p>
                In addition, I create intuitive user experiences and visually compelling designs
                through UI/UX and graphic design. I focus on usability, accessibility, and visual
                consistency to deliver engaging digital interfaces and high-quality design assets that
                enhance user interaction and overall product value.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                About Me
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-7 py-3.5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background/70 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background/70 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="rounded-full border border-border bg-background/70 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Picture</p>
                <h3 className="mt-2 text-2xl">Photo area</h3>
              </div>

              <div className="flex aspect-[4/5] items-center justify-center rounded-[24px] border border-dashed border-border bg-background/60">
                <div className="text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-border bg-secondary/80">
                    <ImageIcon className="h-10 w-10 text-primary" />
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    Add your picture here
                  </p>
                  <p className="mt-2 max-w-[14rem] text-sm leading-6 text-muted-foreground">
                    Replace this placeholder with your profile image when you're ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
