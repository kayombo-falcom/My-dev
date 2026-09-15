# Hirorims Kayombo — Portfolio

Personal portfolio site for Hirorims Kayombo, Software Developer & Graphic Designer. A single-page-app style blog/portfolio with a public site (Home, About, Projects, Reach Me) plus a small private admin panel for managing content.

## Tech Stack

**Language**
- TypeScript
- HTML / CSS

**Core Framework**
- React 18
- Vite 6 (build tool & dev server)
- React Router 7 (routing)

**Styling**
- Tailwind CSS 4
- tw-animate-css
- Radix UI primitives (accordion, dialog, dropdown, tabs, tooltip, etc. — used to build the `components/ui` design system)
- Google Fonts: Inter (body) & Poppins (headings)

**Animation**
- Motion (Framer Motion successor) — scroll reveals, page transitions, mobile menu

**Icons**
- lucide-react
- react-icons (Simple Icons / Tabler sets — tech & tool logos)

**Utilities & UI helpers**
- react-hook-form (forms)
- class-variance-authority, clsx, tailwind-merge (styling utilities)
- embla-carousel-react, react-slick, react-responsive-masonry (carousels/galleries)
- recharts (charts, admin dashboard)
- sonner (toast notifications)
- date-fns, react-day-picker (dates)
- react-dnd (drag & drop, admin uploads)

**Tools**
- Figma (UI/UX design)
- Adobe Photoshop & Illustrator (graphics)
- Git & GitHub (version control)

## Project Structure

```
src/
  app/
    App.tsx            # Root component, providers, router
    routes.ts           # Route definitions
    components/
      layout/           # Header, Footer, ThemeToggle
      sections/         # Hero, About, Projects, Contact (page sections)
      motion/            # Reveal — shared scroll-in-view animation wrapper
      admin/             # Admin-only nav components
      ui/                 # Reusable design-system primitives (buttons, inputs, dialogs, ...)
    pages/
      public/            # Home, About, Projects, Reach Me + PublicLayout
      admin/              # Admin dashboard, files, upload, settings + AdminLayout
    data/                # Static content (e.g. projects.ts)
    context/             # Theme + file-management React context
  assets/                # Images and logos
  styles/                # Tailwind entry, theme tokens, fonts
```

## Getting Started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build
```
