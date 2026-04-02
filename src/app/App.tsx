import { RouterProvider } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { FileProvider } from './context/FileContext';
import { router } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <FileProvider>
        <RouterProvider router={router} />
      </FileProvider>
    </ThemeProvider>
  );
}