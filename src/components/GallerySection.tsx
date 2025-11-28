import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Ingredientes frescos' },
  { src: gallery2, alt: 'Arroz chino humeante' },
  { src: gallery3, alt: 'Tequeños con queso' },
  { src: gallery4, alt: 'Pedidos para llevar' },
  { src: gallery5, alt: 'Chef cocinando' },
  { src: gallery6, alt: 'Plato gourmet' },
];

export function GallerySection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section id="galeria" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Galería
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Momentos <span className="text-primary">Deliciosos</span>
            </h2>
          </div>

          <div
            ref={ref}
            className={cn(
              'grid grid-cols-2 md:grid-cols-3 gap-4 stagger-children',
              isRevealed && 'revealed'
            )}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setLightboxImage(image.src)}
                className="relative rounded-xl overflow-hidden cursor-pointer group aspect-square"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-all duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Ver Imagen
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-secondary/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors p-2"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Imagen ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
