import { AnimatePresence, motion } from 'motion/react';
import { Outlet, useLocation } from 'react-router';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';

export function PublicLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
