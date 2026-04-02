import { Link } from 'react-router';
import { Github, Linkedin, Mail, Code2, Palette } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="absolute top-8 right-8">
          <ThemeToggle />
        </div>

        <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-card border border-border">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Available for freelance</span>
          <Palette className="w-5 h-5 text-accent" />
        </div>

        <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Alex Morgan
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Full Stack Developer & Graphic Designer
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Crafting beautiful digital experiences through elegant code and stunning design.
          Specializing in modern web development and creative visual solutions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-card text-foreground border border-border rounded-lg hover:bg-secondary transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:alex@example.com"
            className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
