import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import worldSmileDay from '../../../assets/posters/world-smile-day.jpg';
import homeQuarantinePlaylist from '../../../assets/posters/home-quarantine-playlist.jpg';
import exploreYourTrip from '../../../assets/posters/explore-your-trip.jpg';
import cityParkEvent from '../../../assets/posters/city-park-event.jpg';
import createWithClay from '../../../assets/posters/create-with-clay.jpg';
import cyberMonday from '../../../assets/posters/cyber-monday.jpg';

type ArtworkSlide = {
  src: string;
  title: string;
};

const artworkSlides: ArtworkSlide[] = [
  { src: worldSmileDay, title: 'World Smile Day' },
  { src: homeQuarantinePlaylist, title: 'Home Quarantine Playlist' },
  { src: exploreYourTrip, title: 'Explore Your Trip' },
  { src: cityParkEvent, title: 'City Park Event' },
  { src: createWithClay, title: 'Create With Clay' },
  { src: cyberMonday, title: 'Cyber Monday' },
];

const REAL_LENGTH = artworkSlides.length;

function getPerPage() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export function ArtworkSlideshow() {
  const [perPage, setPerPage] = useState(getPerPage);
  const [trackIndex, setTrackIndex] = useState(() => getPerPage());
  const [instant, setInstant] = useState(false);
  const [paused, setPaused] = useState(false);
  const prevPerPage = useRef(perPage);

  // Clone a slide off each end so the track can slide one item at a time and
  // wrap around seamlessly, then jump back to the real range unnoticed.
  const extendedSlides = useMemo(
    () => [...artworkSlides.slice(-perPage), ...artworkSlides, ...artworkSlides.slice(0, perPage)],
    [perPage],
  );

  const step = (direction: 1 | -1) => {
    setInstant(false);
    setTrackIndex((prev) => prev + direction);
  };

  useEffect(() => {
    const onResize = () => setPerPage(getPerPage());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (prevPerPage.current === perPage) return;
    const realIndexBeforeResize =
      ((trackIndex - prevPerPage.current) % REAL_LENGTH + REAL_LENGTH) % REAL_LENGTH;
    prevPerPage.current = perPage;
    setInstant(true);
    setTrackIndex(perPage + realIndexBeforeResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => step(1), 3000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const handleAnimationComplete = () => {
    if (trackIndex >= perPage + REAL_LENGTH) {
      setInstant(true);
      setTrackIndex(trackIndex - REAL_LENGTH);
    } else if (trackIndex < perPage) {
      setInstant(true);
      setTrackIndex(trackIndex + REAL_LENGTH);
    }
  };

  const realIndex = ((trackIndex - perPage) % REAL_LENGTH + REAL_LENGTH) % REAL_LENGTH;

  const goToReal = (target: number) => {
    setInstant(false);
    setTrackIndex(perPage + target);
  };

  return (
    <div
      className="glass-panel relative rounded-[28px] border border-border p-4 md:p-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          style={{ willChange: 'transform' }}
          animate={{ x: `-${trackIndex * (100 / perPage)}%` }}
          transition={instant ? { duration: 0 } : { duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          onAnimationComplete={handleAnimationComplete}
        >
          {extendedSlides.map((slide, i) => (
            <div
              key={`${slide.src}-${i}`}
              style={{ flex: `0 0 ${100 / perPage}%` }}
              className="px-2"
            >
              <div className="group overflow-hidden rounded-2xl border border-border">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="px-3 py-2 text-sm font-medium text-foreground md:text-base">
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => step(-1)}
        aria-label="Previous artwork"
        className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-colors duration-300 hover:bg-primary hover:text-primary-foreground md:left-4"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => step(1)}
        aria-label="Next artwork"
        className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-lg transition-colors duration-300 hover:bg-primary hover:text-primary-foreground md:right-4"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-5 flex justify-center gap-2">
        {artworkSlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goToReal(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === realIndex ? 'w-6 bg-primary' : 'w-1.5 bg-foreground/30 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
