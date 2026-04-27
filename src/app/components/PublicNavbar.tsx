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
                  `rounded-full border border-[#dbe2ea] bg-white px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 ${
                    isActive
                      ? '!border-[#56b98b] !bg-[#56b98b] !text-white'
                      : 'text-muted-foreground hover:bg-[#f4f7fa] hover:text-foreground'
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
                `rounded-full border border-[#dbe2ea] bg-white px-4 py-3 text-center text-sm font-medium text-foreground transition-colors duration-300 ${
                  isActive
                    ? '!border-[#56b98b] !bg-[#56b98b] !text-white'
                    : 'text-muted-foreground hover:bg-[#f4f7fa]'
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
