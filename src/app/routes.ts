import { createBrowserRouter } from 'react-router';
import { AdminLayout } from './pages/AdminLayout';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminUpload } from './pages/AdminUpload';
import { AdminFiles } from './pages/AdminFiles';
import { AdminSettings } from './pages/AdminSettings';
import { PublicLayout } from './pages/PublicLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ReachMePage } from './pages/ReachMePage';

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
