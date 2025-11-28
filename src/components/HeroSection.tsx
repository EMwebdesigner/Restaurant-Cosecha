import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import { cn } from '@/lib/utils';

const heroImages = [hero1, hero2, hero3];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          )}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img
          src={logo}
          alt="Tu Comida Venezolana"
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 animate-hero-title drop-shadow-2xl rounded-full"
        />
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-4 animate-hero-title text-shadow-lg text-primary-foreground">
          Tu Comida <span className="text-accent">Venezolana</span>
        </h1>
        
        <p className="text-lg md:text-2xl mb-8 animate-hero-subtitle text-primary-foreground/90 text-shadow max-w-2xl mx-auto">
          Arroz Chino y Tequeños con auténtico sabor venezolano.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-hero-buttons">
          <Button variant="hero" size="xl" asChild>
            <a href="#contacto">Hacer Pedido</a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#menu">Ver Menú</a>
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              'w-3 h-3 rounded-full transition-all duration-300',
              currentSlide === index
                ? 'bg-accent w-8'
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
