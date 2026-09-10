import { Outlet, useLocation } from 'react-router';
import { PublicNavbar } from '../components/PublicNavbar';

export function PublicLayout() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <div className="min-h-screen bg-background">
      {showNavbar ? <PublicNavbar /> : null}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
