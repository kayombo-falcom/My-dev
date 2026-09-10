import { Outlet } from 'react-router';
import { AdminSidebar } from '../../components/admin/AdminSidebar';
import { AdminNavbar } from '../../components/admin/AdminNavbar';

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
      <AdminSidebar />
      <div className="ml-64">
        <AdminNavbar />
        <main className="pt-16 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
