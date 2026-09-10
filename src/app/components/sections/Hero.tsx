import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import profilePhoto from '../../../assets/kayombo03.png';
import { Reveal, RevealGroup, RevealItem } from '../motion/Reveal';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const focusAreas = [
  { label: 'React', tone: 'primary' },
  { label: 'TypeScript', tone: 'secondary' },
  { label: 'Next.js', tone: 'accent' },
  { label: 'Django', tone: 'primary' },
  { label: 'Tailwind CSS', tone: 'secondary' },
  { label: 'Figma', tone: 'accent' },
] as const;

const toneClasses = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent',
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid gap-10 px-6 py-10 md:px-10 md:py-12 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] xl:items-center xl:gap-12 xl:px-14 xl:py-14">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Available for select freelance work
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-5xl leading-[1.05] font-semibold text-foreground md:text-6xl">
              HIRORIMS KAYOMBO
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <h2 className="mt-5 max-w-3xl text-xl leading-tight font-light text-muted-foreground md:text-3xl">
              Software Developer &amp; Graphic Designer
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              I build responsive web apps and clean digital experiences, backed by UI/UX and
              graphic design.
            </p>
          </Reveal>

          <RevealGroup className="mt-8 flex flex-wrap gap-2">
            {focusAreas.map(({ label, tone }) => (
              <RevealItem key={label}>
                <Badge variant="outline" className={`rounded-full border-transparent px-4 py-1.5 text-sm ${toneClasses[tone]}`}>
                  {label}
                </Badge>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.28}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" className="group rounded-full px-7">
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-7">
                <Link to="/reach-me">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={26}>
          <div className="relative">
            <div className="hero-portrait-glow absolute -inset-4 rounded-[2rem] opacity-70" />
            <div className="relative rounded-3xl bg-card p-3 shadow-[0_30px_80px_rgba(19,18,38,0.2)]">
              <div className="overflow-hidden rounded-2xl bg-muted">
                <img
                  src={profilePhoto}
                  alt="HIRORIMS KAYOMBO"
                  className="aspect-[4/3] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <motion.div
        className="hidden justify-center pb-6 xl:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown className="h-5 w-5 text-muted-foreground/60" />
      </motion.div>
    </section>
  );
}
