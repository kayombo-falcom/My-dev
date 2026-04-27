import { NavLink } from 'react-router';

import {
  BriefcaseBusiness,
  Github,
  Home,
  Linkedin,
  Mail,
  UserRound,
} from 'lucide-react';
import profilePhoto from '../../assets/kayombo03.png';

const quickNavItems = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'About Me', to: '/about', icon: UserRound },
  { label: 'Projects', to: '/projects', icon: BriefcaseBusiness },
  { label: 'Reach Me', to: '/reach-me', icon: Mail },
];

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid xl:grid-cols-[18.5rem_minmax(0,1fr)]">
          <aside className="bg-[linear-gradient(180deg,#56b98b_0%,#55b488_36%,#4d9f79_100%)] text-white">
            <div className="flex h-full flex-col p-7">
              <div>
                <p className="text-3xl font-semibold tracking-tight">HIRORIMS KAYOMBO</p>
                <div className="mx-auto mt-8 h-44 w-44 overflow-hidden rounded-full border-4 border-white/35 bg-white/15 shadow-[0_18px_40px_rgba(10,30,24,0.22)]">
                  <img
                    src={profilePhoto}
                    alt="HIRORIMS KAYOMBO"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <p className="mt-8 text-center text-base leading-8 text-white/90">
                  Hi, my name is HIRORIMS KAYOMBO and I build clean digital experiences through
                  software development, UI/UX design, and thoughtful problem solving.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full bg-white/96 p-3 text-[#4aa884] transition-colors duration-300 hover:bg-white"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full bg-white/96 p-3 text-[#4aa884] transition-colors duration-300 hover:bg-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:alex@example.com"
                  aria-label="Email"
                  className="rounded-full bg-white/96 p-3 text-[#4aa884] transition-colors duration-300 hover:bg-white"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              <nav className="mt-10 space-y-2 border-t border-white/20 pt-8">
                {quickNavItems.map(({ label, to, icon: Icon }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors duration-300 ${
                        isActive
                          ? 'bg-white text-[#3f8e6c]'
                          : 'text-white/88 hover:bg-white/12 hover:text-white'
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </NavLink>
                ))}
              </nav>
            </div>
          </aside>

          <div className="bg-white">
            <div className="grid gap-12 px-6 py-10 md:px-10 md:py-14 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] xl:items-start xl:gap-14 xl:px-14">
              <div className="max-w-3xl pt-2">
                <h1 className="text-5xl leading-none font-semibold text-[#262626] md:text-6xl">
                  HIRORIMS KAYOMBO
                </h1>

                <h2 className="mt-5 max-w-3xl text-2xl leading-tight font-light text-[#5d5d5d] md:text-4xl">
                  Software Developer
                </h2>

                <p className="mt-8 max-w-3xl text-lg leading-9 text-[#4b5563]">
                  I'm a software developer focused on building responsive web applications and
                  clean digital experiences. I also work with UI/UX and graphic design to create
                  products that are useful, modern, and easy to use.
                </p>
              </div>

              <div className="overflow-hidden rounded-sm bg-[#ececec]">
                <img
                  src={profilePhoto}
                  alt="HIRORIMS KAYOMBO"
                  className="aspect-[4/3] w-full object-cover object-top grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
