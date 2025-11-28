import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Flame, Wheat, Clock, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const processSteps = [
  {
    icon: Wheat,
    title: 'Ingredientes Frescos',
    description: 'Seleccionamos los mejores ingredientes cada día.',
  },
  {
    icon: Flame,
    title: 'Cocina al Wok',
    description: 'Preparamos cada plato con técnica tradicional.',
  },
  {
    icon: Clock,
    title: 'Al Momento',
    description: 'Cocinamos tu pedido cuando lo solicitas.',
  },
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Garantizamos el mejor sabor en cada bocado.',
  },
];

export function ProcessSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Proceso de Elaboración
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Nuestro <span className="text-primary">Secreto</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid grid-cols-2 md:grid-cols-4 gap-8',
            isRevealed && 'revealed'
          )}
        >
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={cn(
                'text-center group',
                isRevealed ? 'animate-fade-in' : 'opacity-0'
              )}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative mb-4 inline-block">
                <div className="w-24 h-24 rounded-full border-4 border-primary/20 flex items-center justify-center mx-auto group-hover:border-accent transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center rotate-slow group-hover:bg-accent transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
