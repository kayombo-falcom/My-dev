import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
    </div>
  );
}
