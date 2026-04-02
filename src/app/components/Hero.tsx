import { Link } from 'react-router';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profilePhoto from '../../assets/profile-photo.png';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-10 md:px-8 md:py-14">
      <div className="section-shell relative">
        <div className="pointer-events-none absolute inset-x-6 top-20 h-56 rounded-full bg-primary/10 blur-3xl md:inset-x-24" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">Welcome</p>
            <h1 className="mt-4 whitespace-nowrap text-xl leading-[1.1] md:text-3xl lg:text-4xl">
              Hi, I'm HIRORIMS KAYOMBO
            </h1>

            <h2 className="mt-4 max-w-3xl text-lg leading-tight text-secondary md:text-2xl">
              Software Developer | UI/UX &amp; Graphic Designer
            </h2>

            <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
              <p>
                I specialize in designing and developing scalable, high-performance web applications
                using modern technologies and industry best practices.
              </p>
              <p>
                I also create intuitive user experiences and visually compelling designs that improve
                usability, accessibility, and overall product value.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-primary-foreground transition-all duration-300 hover:bg-primary/90"
              >
                About Me
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-7 py-3 backdrop-blur transition-all duration-300 hover:bg-muted"
              >
                View Projects
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background/70 p-3 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border bg-background/70 p-3 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="rounded-full border border-border bg-background/70 p-3 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-primary">Profile Overview</p>
            <div className="mt-5 overflow-hidden rounded-[24px] border border-border bg-muted">
              <img
                src={profilePhoto}
                alt="HIRORIMS KAYOMBO"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
