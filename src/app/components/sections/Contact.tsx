import { Mail } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal';

const CONTACT_EMAIL = 'hirorimskayombo@gmail.com';
const GITHUB_URL = 'https://github.com/kayombo-falcom';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/kayombo-falcom',
    href: GITHUB_URL,
  },
];

const services = [
  { label: 'Product UI', tone: 'primary' },
  { label: 'Portfolio Sites', tone: 'secondary' },
  { label: 'Design-to-Code', tone: 'accent' },
] as const;

const toneClasses = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent',
};

export function Contact() {
  return (
    <section id="contact" className="bg-background px-6 py-12 md:px-10 md:py-16 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="max-w-3xl">
            <div className="flex items-start gap-4">
              <span className="accent-bar mt-2 h-12 w-1.5 rounded-full" />
              <div>
                <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Reach Me</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  Have a product, brand refresh, or portfolio project in mind? Here's how to get
                  in touch.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {services.map(({ label, tone }) => (
                    <span
                      key={label}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium ${toneClasses[tone]}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 sm:grid-cols-2">
          {contactMethods.map(({ icon: Icon, label, value, href }) => (
            <RevealItem key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="glass-panel flex h-full items-center gap-4 rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.16)]"
              >
                <div className="rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 text-base text-foreground">{value}</p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-6">
          <div className="glass-panel flex flex-col items-center gap-3 rounded-[28px] border border-border px-8 py-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Available for select freelance work
            </span>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              Reach out directly by email or GitHub — I typically respond within 1 business day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
