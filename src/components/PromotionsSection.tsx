import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function PromotionsSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-accent to-fire">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={cn(
            'text-center max-w-3xl mx-auto',
            isRevealed ? 'animate-scale-in' : 'opacity-0'
          )}
        >
          <span className="inline-block px-4 py-2 bg-secondary/20 rounded-full text-secondary-foreground font-semibold text-sm uppercase tracking-wider mb-4 pulse-glow">
            Promoción Especial
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black text-secondary-foreground mb-4 text-shadow-lg">
            ¡Viernes de Combo!
          </h2>
          
          <p className="text-xl text-secondary-foreground/90 mb-8">
            Todos los viernes, llévate el <strong>Combo Pareja</strong> con un{' '}
            <span className="font-bold text-secondary">15% de descuento</span>. 
            ¡No te lo pierdas!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl" asChild>
              <a href="#contacto">Aprovechar Oferta</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
