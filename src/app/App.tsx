import { RouterProvider } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { FileProvider } from './context/FileContext';
import { SmoothScroll } from './components/motion/SmoothScroll';
import { router } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <FileProvider>
        <SmoothScroll />
        <RouterProvider router={router} />
      </FileProvider>
    </ThemeProvider>
  );
}