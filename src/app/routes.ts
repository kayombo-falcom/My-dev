import { createBrowserRouter } from 'react-router';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminUpload } from './pages/admin/AdminUpload';
import { AdminFiles } from './pages/admin/AdminFiles';
import { AdminSettings } from './pages/admin/AdminSettings';
import { PublicLayout } from './pages/public/PublicLayout';
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { ProjectsPage } from './pages/public/ProjectsPage';
import { ReachMePage } from './pages/public/ReachMePage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: PublicLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'about',
        Component: AboutPage
      },
      {
        path: 'projects',
        Component: ProjectsPage
      },
      {
        path: 'reach-me',
        Component: ReachMePage
      }
    ]
  },
  {
    path: '/admin',
    Component: AdminLayout,
    children: [
      {
        index: true,
        Component: AdminDashboard
      },
      {
        path: 'projects',
        Component: AdminFiles
      },
      {
        path: 'designs',
        Component: AdminFiles
      },
      {
        path: 'upload',
        Component: AdminUpload
      },
      {
        path: 'settings',
        Component: AdminSettings
      }
    ]
  }
]);
