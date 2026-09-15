import { Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Link } from 'react-router';
import { Reveal } from '../motion/Reveal';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Reach Me', to: '/reach-me' },
];

const CONTACT_EMAIL = 'hirorimskayombo@gmail.com';
const GITHUB_URL = 'https://github.com/kayombo-falcom';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-14 md:px-10 md:py-16 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <Link to="/" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  HK
                </span>
                <span className="text-sm font-semibold tracking-tight text-foreground">
                  HIRORIMS KAYOMBO
                </span>
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                Software Developer &amp; Graphic Designer building reliable digital solutions with
                a focus on clean design and secure engineering.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Navigate
              </p>
              <ul className="mt-4 space-y-3">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Get in touch
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <SiGithub className="h-4 w-4" />
                GitHub
              </a>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Available for select freelance and collaboration opportunities.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border pt-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Hirorims Kayombo. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/80">
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
