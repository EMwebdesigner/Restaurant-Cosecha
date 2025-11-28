import { useScrollReveal } from '@/hooks/useScrollReveal';
import aboutImg from '@/assets/about-cooking.jpg';
import { cn } from '@/lib/utils';

export function AboutSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={cn(
              'relative overflow-hidden rounded-2xl shadow-card',
              isRevealed ? 'animate-slide-right' : 'opacity-0'
            )}
          >
            <img
              src={aboutImg}
              alt="Cocinando con pasión"
              className="w-full h-80 md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
          </div>

          {/* Content */}
          <div
            className={cn(
              'space-y-6',
              isRevealed ? 'animate-slide-left' : 'opacity-0'
            )}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Sabor Venezolano con <span className="text-primary">Pasión</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En <strong className="text-foreground">Tu Comida Venezolana</strong>, 
              llevamos el auténtico sabor de nuestra tierra a tu mesa. 
              Nuestro arroz chino estilo venezolano y tequeños dorados son 
              preparados con recetas tradicionales y los ingredientes más frescos.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada plato es preparado con amor y dedicación, manteniendo 
              las técnicas culinarias que nos hacen únicos. ¡Prueba el 
              verdadero sabor de Venezuela!
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-primary">+500</div>
                <div className="text-sm text-muted-foreground">Clientes Felices</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-accent">5+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-xl">
                <div className="text-3xl font-bold text-fire">100%</div>
                <div className="text-sm text-muted-foreground">Sabor Auténtico</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
