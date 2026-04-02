import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { DesignGallery } from '../components/DesignGallery';
import { FileResources } from '../components/FileResources';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Portfolio() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <DesignGallery />
      <FileResources />
      <Contact />
      <Footer />
    </div>
  );
}
