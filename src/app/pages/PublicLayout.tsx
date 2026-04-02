import { Outlet, useLocation } from 'react-router';
import { Footer } from '../components/Footer';
import { PublicNavbar } from '../components/PublicNavbar';

export function PublicLayout() {
  const location = useLocation();
  const showFooter = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <main>
        <Outlet />
      </main>
      {showFooter ? <Footer /> : null}
    </div>
  );
}
