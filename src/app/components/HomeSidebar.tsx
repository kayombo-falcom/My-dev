import { NavLink } from 'react-router';
import { BriefcaseBusiness, Home, Mail, UserRound } from 'lucide-react';
import sidebarLogo from '../../assets/sidebar-logo.svg';
import { ThemeToggle } from './ThemeToggle';

const quickNavItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About Me', to: '/about', icon: UserRound },
  { label: 'Projects', to: '/projects', icon: BriefcaseBusiness },
  { label: 'Reach Me', to: '/reach-me', icon: Mail },
];

export function HomeSidebar() {
  return (
    <aside className="bg-[linear-gradient(180deg,#57b68d_0%,#53ad84_40%,#4b9975_100%)] text-white dark:bg-[linear-gradient(180deg,#173c31_0%,#1d4e3f_45%,#14382d_100%)] xl:sticky xl:top-0 xl:h-screen">
      <div className="flex h-full flex-col px-6 py-5">
        <div>
          <p className="text-center text-xl font-semibold leading-tight tracking-tight md:text-[1.65rem]">
            HIRORIMS KAYOMBO
          </p>
          <div className="mx-auto mt-6 flex w-full max-w-[14.5rem] items-center justify-center rounded-[1.75rem] border border-white/18 bg-white/12 px-5 py-4 backdrop-blur-sm shadow-[0_14px_32px_rgba(8,26,20,0.18)] md:max-w-[16rem] md:px-6 md:py-5">
            <img
              src={sidebarLogo}
              alt="HIRORIMS KAYOMBO logo"
              className="max-h-24 w-full object-contain md:max-h-28"
            />
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
                    ? 'bg-white/92 text-[#3f8e6c]'
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
          <ThemeToggle showLabel lightOnDark />
        </div>
      </div>
    </aside>
  );
}
