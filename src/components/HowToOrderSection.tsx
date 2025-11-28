import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { UtensilsCrossed, MessageCircle, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    icon: UtensilsCrossed,
    title: 'Elige tu plato',
    description: 'Selecciona tu arroz chino, tequeños o combo favorito de nuestro menú.',
  },
  {
    icon: MessageCircle,
    title: 'Envíanos tu pedido',
    description: 'Contáctanos por WhatsApp o Instagram con tu pedido y dirección.',
  },
  {
    icon: Truck,
    title: 'Confirmamos tu entrega',
    description: 'Te confirmamos el tiempo estimado y llevamos tu pedido calentito.',
  },
];

export function HowToOrderSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Cómo Pedir
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Fácil y <span className="text-accent">Rápido</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-3 gap-8 mb-12',
            isRevealed && 'revealed'
          )}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={cn(
                'text-center',
                isRevealed ? 'animate-fade-in' : 'opacity-0'
              )}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto icon-bounce">
                  <step.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-secondary-foreground/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="whatsapp" size="lg" asChild>
            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
          <Button variant="fire" size="lg" asChild>
            <a href="https://instagram.com/tucomidavenezolana" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
