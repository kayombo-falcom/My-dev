import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type ThemeToggleProps = {
  showLabel?: boolean;
  lightOnDark?: boolean;
};

export function ThemeToggle({ showLabel = false, lightOnDark = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center gap-3 rounded-full transition-all duration-300 ${
        showLabel ? 'px-0 py-0' : 'border px-3 py-2'
      } ${
        lightOnDark
          ? 'text-white'
          : 'border-border bg-white text-foreground hover:bg-muted'
      }`}
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      {showLabel ? <span className="text-sm font-semibold">Dark Mode</span> : null}
      <span
        className={`relative inline-flex h-8 w-15 items-center rounded-full border transition-colors duration-300 ${
          lightOnDark
            ? 'border-white/35 bg-white/20'
            : 'border-[#d6dce5] bg-[#e9eef4]'
        }`}
      >
        <span
          className={`absolute top-1 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${
            isDark
              ? 'left-[2.1rem] bg-[#1f2937] text-white'
              : 'left-1 bg-white text-[#4b5563]'
          }`}
        >
          {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
        </span>
      </span>
    </button>
  );
}
