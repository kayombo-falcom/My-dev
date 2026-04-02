import { Github, Heart, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 md:px-8">
      <div className="section-shell">
        <div className="glass-panel flex flex-col items-center justify-between gap-6 p-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.26em] text-muted-foreground">Alex Morgan</p>
            <h3 className="mt-2 text-2xl">Full Stack Developer & Graphic Designer</h3>
            <p className="text-sm text-muted-foreground">
              Building warm, high-performing digital experiences with a strong point of view.
            </p>
          </div>

          <div className="flex items-center gap-4">
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

        <div className="mt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            Copyright 2026 Alex Morgan. Made with <Heart className="h-4 w-4 fill-accent text-accent" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
