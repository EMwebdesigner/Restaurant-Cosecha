import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'María González',
    text: '¡El mejor arroz chino que he probado fuera de Venezuela! Me transportó directamente a mi infancia. Totalmente recomendado.',
    rating: 5,
    location: 'Madrid',
  },
  {
    name: 'Carlos Rodríguez',
    text: 'Los tequeños están increíbles, crujientes por fuera y con queso derretido por dentro. Ya soy cliente frecuente.',
    rating: 5,
    location: 'Barcelona',
  },
  {
    name: 'Ana Martínez',
    text: 'Pedí el combo familiar para una reunión y todos quedaron encantados. Llegó caliente y en perfecto estado.',
    rating: 5,
    location: 'Valencia',
  },
  {
    name: 'Pedro Sánchez',
    text: 'Excelente servicio y sabor auténtico. Los precios son muy justos para la calidad que ofrecen.',
    rating: 5,
    location: 'Sevilla',
  },
];

export function TestimonialsSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Lo que dicen nuestros <span className="text-primary">Clientes</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-2 lg:grid-cols-4 gap-6',
            isRevealed && 'revealed'
          )}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                'bg-card p-6 rounded-2xl shadow-soft border border-border',
                isRevealed
                  ? index % 2 === 0
                    ? 'animate-slide-right'
                    : 'animate-slide-left'
                  : 'opacity-0'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-fire text-fire" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
