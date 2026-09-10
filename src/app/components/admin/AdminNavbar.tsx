import { User } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

export function AdminNavbar() {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 fixed top-0 left-64 right-0 z-10">
      <div>
        <h1 className="text-xl">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="text-right">
            <p className="text-sm">Alex Morgan</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}
