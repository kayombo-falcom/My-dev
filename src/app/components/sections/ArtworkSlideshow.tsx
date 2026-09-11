import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ArtworkSlide = {
  src: string;
  title: string;
};

// Placeholder artwork — replace `src` with your own poster/artwork image paths.
const artworkSlides: ArtworkSlide[] = [
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=1000&fit=crop',
    title: 'Campaign Poster — IT Knowledge Hub',
  },
  {
    src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1000&fit=crop',
    title: 'Brand Identity — Trust Microfinance',
  },
  {
    src: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1000&fit=crop&sat=-20',
    title: 'Portfolio Visual System',
  },
];

export function ArtworkSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % artworkSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (next: number) => {
    setIndex((next + artworkSlides.length) % artworkSlides.length);
  };

  const current = artworkSlides[index];

  return (
    <div
      className="glass-panel relative overflow-hidden rounded-[28px] border border-border"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] w-full sm:aspect-[16/9]">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous artwork"
          className="absolute top-1/2 left-4 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur-md transition-colors duration-300 hover:bg-background"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next artwork"
          className="absolute top-1/2 right-4 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur-md transition-colors duration-300 hover:bg-background"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <p className="text-sm font-medium text-foreground md:text-base">{current.title}</p>
          <div className="flex gap-2">
            {artworkSlides.map((slide, i) => (
              <button
                key={slide.src + i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-primary' : 'w-1.5 bg-foreground/30 hover:bg-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
