import { useState } from 'react';
import { X } from 'lucide-react';

const designs = [
  {
    id: 1,
    title: 'Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Mobile App UI',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Website Mockup',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Logo Design',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Dashboard Design',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Marketing Material',
    category: 'Print',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&h=400&fit=crop'
  }
];

export function DesignGallery() {
  const [selectedDesign, setSelectedDesign] = useState<typeof designs[0] | null>(null);

  return (
    <section id="designs" className="bg-card px-6 py-16 md:px-8 md:py-20">
      <div className="section-shell">
        <div className="section-header">
          <h2 className="section-title">Selected design pieces.</h2>
          <p className="section-subtitle">
            A quick visual sample of brand, interface, and marketing work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <div
              key={design.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedDesign(design)}
            >
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs text-accent mb-2">{design.category}</span>
                <h3 className="text-xl">{design.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {selectedDesign && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedDesign(null)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDesign(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="rounded-2xl overflow-hidden bg-card border border-border">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="w-full max-h-[80vh] object-contain"
                />
                <div className="p-6">
                  <span className="text-sm text-accent">{selectedDesign.category}</span>
                  <h3 className="text-2xl mt-2">{selectedDesign.title}</h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
