import { createBrowserRouter } from 'react-router';
import { PublicLayout } from './pages/public/PublicLayout';
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { ProjectsPage } from './pages/public/ProjectsPage';
import { ReachMePage } from './pages/public/ReachMePage';
import { NotFoundPage } from './pages/public/NotFoundPage';

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
      },
      {
        path: '*',
        Component: NotFoundPage
      }
    ]
  }
]);
