import { NavLink } from 'react-router';
import { BriefcaseBusiness, Home, Mail, UserRound } from 'lucide-react';
import sidebarLogo from '../../assets/logo white01.svg';
import { ThemeToggle } from './ThemeToggle';

const quickNavItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About Me', to: '/about', icon: UserRound },
  { label: 'Projects', to: '/projects', icon: BriefcaseBusiness },
  { label: 'Reach Me', to: '/reach-me', icon: Mail },
];

export function HomeSidebar() {
  return (
    <aside className="brand-sidebar text-white xl:sticky xl:top-0 xl:h-screen">
      <div className="flex h-full flex-col px-6 py-5">
        <div>
          <p className="text-center text-xl font-semibold leading-tight tracking-tight md:text-[1.65rem]">
            HIRORIMS KAYOMBO
          </p>
          <div className="brand-badge mx-auto mt-5 flex w-full max-w-[12rem] justify-center p-2 md:mt-6 md:max-w-[13rem] md:p-3">
            <div className="brand-logo-shell flex min-h-[6.75rem] w-full items-center justify-center px-2 py-2 text-center md:min-h-[7.5rem]">
              <img
                src={sidebarLogo}
                alt="HIRORIMS KAYOMBO logo"
                className="brand-logo-image mx-auto block max-h-20 w-auto max-w-full object-contain md:max-h-24"
              />
            </div>
          </div>
          <p className="mt-6 text-center text-sm leading-7 text-white/90 md:text-[0.96rem]">
            Hi, my name is HIRORIMS KAYOMBO and I build clean digital experiences through software
            development, UI/UX design, and thoughtful problem solving.
          </p>
        </div>

        <nav className="mt-8 space-y-1.5 border-t border-white/20 pt-6">
          {quickNavItems.map(({ label, to, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors duration-300 md:text-[0.96rem] ${
                  isActive
                    ? 'bg-white/94 text-[#14213d]'
                    : 'text-white/90 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <Icon className="h-4.5 w-4.5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/20 pt-6">
          <ThemeToggle variant="sidebar" />
        </div>
      </div>
    </aside>
  );
}
