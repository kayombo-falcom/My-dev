import { Outlet } from 'react-router';
import { Footer } from '../components/Footer';
import { PublicNavbar } from '../components/PublicNavbar';

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
