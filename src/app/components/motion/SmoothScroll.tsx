import { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: (t: number) => 1 - Math.pow(1 - t, 2),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    let frameId: number | null = null;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        if (frameId !== null) {
          cancelAnimationFrame(frameId);
          frameId = null;
        }
      } else if (frameId === null) {
        frameId = requestAnimationFrame(raf);
      }
    }

    frameId = requestAnimationFrame(raf);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
      lenis.destroy();
    };
  }, []);

  return null;
}
