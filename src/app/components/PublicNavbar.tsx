import { NavLink } from 'react-router';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Reach Me', to: '/reach-me' }
];

export function PublicNavbar() {
  return (
    <header className="sticky top-0 z-40 px-6 py-4 md:px-8">
      <div className="section-shell">
        <div className="glass-panel flex items-center justify-between gap-4 px-5 py-4 md:px-6">
          <div className="min-w-0">
            <p className="text-sm uppercase tracking-[0.26em] text-muted-foreground">Dashboard</p>
            <h1 className="mt-1 text-xl leading-none md:text-2xl">Alex Morgan</h1>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-muted-foreground md:block">
              Creative frontend dashboard
            </div>
            <div className="lg:hidden rounded-full border border-border bg-background/60 p-3 text-muted-foreground">
              <Menu className="h-4 w-4" />
            </div>
            <ThemeToggle />
          </div>
        </div>

        <nav className="mt-4 grid grid-cols-2 gap-3 lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `glass-panel px-4 py-3 text-center text-sm transition-all duration-300 ${
                  isActive
                    ? 'border-primary/35 bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-secondary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
