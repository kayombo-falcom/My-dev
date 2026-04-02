import { ArrowRight, Code2, Github, Linkedin, Mail, Palette, Sparkles } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-8 md:px-8 md:py-10">
      <div className="section-shell relative min-h-screen">
        <div className="pointer-events-none absolute inset-x-6 top-24 h-64 rounded-full bg-primary/12 blur-3xl md:inset-x-24" />
        <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 grid-sheen opacity-30 [mask-image:linear-gradient(180deg,white,transparent)]" />

        <div className="absolute right-0 top-0 z-20">
          <ThemeToggle />
        </div>

        <div className="relative z-10 grid min-h-screen items-center gap-12 py-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:gap-16">
          <div className="max-w-3xl self-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-4 py-2 text-sm shadow-sm backdrop-blur">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Available for freelance and contract work</span>
              <Palette className="h-4 w-4 text-accent" />
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.32em] text-muted-foreground">Creative developer portfolio</p>
            <h1 className="mt-4 max-w-4xl text-5xl leading-[0.95] md:text-7xl lg:text-[5.25rem]">
              I build expressive digital products with code and visual craft.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              Alex Morgan is a full stack developer and graphic designer shaping high-touch websites,
              polished interfaces, and brand-forward web experiences that feel thoughtful from the
              first scroll to the final click.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-7 py-3.5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
              >
                Start a Project
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="rounded-full border border-border bg-card/70 px-4 py-2 backdrop-blur">
                Based in Nairobi, working worldwide
              </div>
              <div className="rounded-full border border-border bg-card/70 px-4 py-2 backdrop-blur">
                Web apps, branding, UI systems
              </div>
            </div>
          </div>

          <div className="glass-panel relative overflow-hidden self-center p-6 md:p-8">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Current focus</p>
                  <h2 className="mt-2 text-3xl">Designing with depth</h2>
                </div>
                <Sparkles className="h-8 w-8 text-primary" />
              </div>

              <div className="mt-6 space-y-4">
                {[
                  'Distinctive landing pages with strong visual rhythm',
                  'Product interfaces that stay clear as they scale',
                  'Brand systems translated cleanly into modern frontend code',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-background/60 px-4 py-4 text-sm leading-6 text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-secondary/70 p-4 text-left">
                  <p className="text-3xl text-primary">05+</p>
                  <p className="mt-2 text-sm text-muted-foreground">Years crafting digital experiences</p>
                </div>
                <div className="rounded-2xl bg-secondary/70 p-4 text-left">
                  <p className="text-3xl text-primary">50</p>
                  <p className="mt-2 text-sm text-muted-foreground">Shipped products and brand systems</p>
                </div>
                <div className="rounded-2xl bg-secondary/70 p-4 text-left">
                  <p className="text-3xl text-primary">24h</p>
                  <p className="mt-2 text-sm text-muted-foreground">Typical turnaround for first concepts</p>
                </div>
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
          </div>
        </div>
      </div>
    </section>
  );
}
