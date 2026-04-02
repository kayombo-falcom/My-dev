import { NavLink } from 'react-router';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Reach Me', to: '/reach-me' }
];

export function PublicNavbar() {
  return (
    <header className="px-6 py-4 md:px-8">
      <div className="section-shell">
        <div className="flex items-center justify-center gap-4">
          <nav className="hidden items-center justify-center gap-4 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-full border border-border bg-card/88 px-4 py-2 text-sm shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'text-muted-foreground hover:bg-white hover:text-foreground'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="shrink-0">
            <ThemeToggle />
          </div>
        </div>

        <nav className="mt-4 grid grid-cols-2 gap-4 lg:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `rounded-full border border-border bg-card/88 px-4 py-3 text-center text-sm shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 ${
                  isActive
                    ? 'border-primary/35 bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-white'
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
