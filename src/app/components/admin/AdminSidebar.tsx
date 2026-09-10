import { NavLink } from 'react-router';
import { LayoutDashboard, FolderOpen, Palette, Upload, Settings, LogOut } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: FolderOpen, label: 'Projects', path: '/admin/projects' },
  { icon: Palette, label: 'Design Files', path: '/admin/designs' },
  { icon: Upload, label: 'Upload Files', path: '/admin/upload' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' }
];

export function AdminSidebar() {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col fixed left-0 top-0">
      <div className="p-6 border-b border-sidebar-border">
        <h2 className="text-xl">Admin Panel</h2>
        <p className="text-sm text-muted-foreground mt-1">Portfolio Manager</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Theme</span>
          <ThemeToggle />
        </div>
        <a
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-300"
        >
          <LogOut className="w-5 h-5" />
          <span>Back to Site</span>
        </a>
      </div>
    </aside>
  );
}
