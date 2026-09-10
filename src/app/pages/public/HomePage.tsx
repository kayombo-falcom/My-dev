import { Hero } from '../components/Hero';
import { HomeSidebar } from '../components/HomeSidebar';

export function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1600px] xl:grid xl:grid-cols-[16.5rem_minmax(0,1fr)]">
        <HomeSidebar />
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}
