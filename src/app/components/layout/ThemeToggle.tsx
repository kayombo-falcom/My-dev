import * as SwitchPrimitive from '@radix-ui/react-switch';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SwitchPrimitive.Root
      checked={isDark}
      onCheckedChange={toggleTheme}
      aria-label="Toggle theme"
      className="group relative inline-flex h-8 w-[3.75rem] shrink-0 items-center rounded-full border border-border bg-muted transition-colors duration-300 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 data-[state=checked]:bg-muted"
    >
      <Sun className="pointer-events-none absolute left-1.5 h-4 w-4 text-muted-foreground/70 transition-opacity duration-300 group-data-[state=checked]:opacity-30" />
      <Moon className="pointer-events-none absolute right-1.5 h-4 w-4 text-muted-foreground/70 transition-opacity duration-300 group-data-[state=unchecked]:opacity-30" />

      <SwitchPrimitive.Thumb
        className="pointer-events-none relative z-10 flex size-6 translate-x-1 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out data-[state=checked]:translate-x-[2.05rem]"
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}
