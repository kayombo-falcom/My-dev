import { createBrowserRouter } from 'react-router';
import { Portfolio } from './pages/Portfolio';
import { AdminLayout } from './pages/AdminLayout';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminUpload } from './pages/AdminUpload';
import { AdminFiles } from './pages/AdminFiles';
import { AdminSettings } from './pages/AdminSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Portfolio
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
