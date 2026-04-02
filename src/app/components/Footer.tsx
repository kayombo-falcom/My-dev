import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-secondary text-secondary-foreground">
      <div className="section-shell px-6 py-5 md:px-8 md:py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-primary-foreground/70">Portfolio</p>
            <h3 className="mt-2 text-lg md:text-xl">HIRORIMS KAYOMBO</h3>
            <p className="mt-2 max-w-lg text-xs leading-6 text-primary-foreground/75 md:text-sm">
              Software Developer, UI/UX designer, and graphic designer building clear and modern digital experiences.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/8 p-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/8 p-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="rounded-full border border-white/15 bg-white/8 p-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-4 border-t border-white/10 pt-3">
          <p className="text-xs text-primary-foreground/70 md:text-sm">
            Copyright 2026 HIRORIMS KAYOMBO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
