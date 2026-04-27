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
    <section id="designs" className="bg-background px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="max-w-4xl">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-12 w-1.5 bg-[#56b98b]" />
            <div>
              <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
                Selected Design Pieces
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">
            A quick visual sample of brand, interface, and marketing work.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {designs.map((design) => (
            <div
              key={design.id}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden border border-border"
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
          <div className="mt-10 border-t border-border pt-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <span className="text-sm text-accent">{selectedDesign.category}</span>
                <h3 className="mt-2 text-2xl text-foreground">{selectedDesign.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDesign(null)}
                className="rounded-lg border border-border bg-background p-2 transition-colors duration-300 hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-hidden border border-border bg-background">
              <img
                src={selectedDesign.image}
                alt={selectedDesign.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
