import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type ThemeToggleProps = {
  variant?: 'navbar' | 'sidebar';
};

export function ThemeToggle({ variant = 'navbar' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const isSidebar = variant === 'sidebar';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`transition-all duration-300 ${
        isSidebar
          ? 'flex min-h-[48px] w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium text-white/90 hover:bg-white/10 hover:text-white md:text-[0.96rem]'
          : 'inline-flex h-[42px] items-center justify-center rounded-full border border-border bg-background px-4 text-foreground hover:bg-muted dark:bg-card dark:hover:bg-muted'
      }`}
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      {isSidebar ? <span>Dark Mode</span> : null}
      <span
        className={`relative inline-flex items-center rounded-full border transition-colors duration-300 ${
          isSidebar ? 'h-6.5 w-12 shrink-0' : 'h-7 w-12'
        } ${
          isSidebar ? 'border-white/35 bg-white/20' : 'border-border bg-muted dark:bg-background'
        }`}
      >
        <span
          className={`absolute flex items-center justify-center rounded-full transition-all duration-300 ${
            'top-1/2 h-5 w-5 -translate-y-1/2'
          } ${
            isDark
              ? 'left-[1.55rem] bg-secondary text-secondary-foreground'
              : 'left-0.5 bg-primary text-primary-foreground'
          }`}
        >
          {isDark ? (
            <Moon className="h-3.5 w-3.5" />
          ) : (
            <Sun className="h-3.5 w-3.5" />
          )}
        </span>
      </span>
    </button>
  );
}
