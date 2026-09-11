import { RouterProvider } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { SmoothScroll } from './components/motion/SmoothScroll';
import { router } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}