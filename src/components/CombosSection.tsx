import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import combo1 from '@/assets/combo-1.jpg';
import combo2 from '@/assets/combo-2.jpg';
import menuTequenos from '@/assets/menu-tequenos.jpg';
import { cn } from '@/lib/utils';

const combos = [
  {
    name: 'Combo 1',
    title: 'Combo Personal',
    image: combo1,
    items: ['Arroz Chino Personal', '6 Tequeños', 'Bebida'],
    price: '12.50$',
    popular: false,
  },
  {
    name: 'Combo 2',
    title: 'Combo Pareja',
    image: combo2,
    items: ['Arroz Chino Mediano', '12 Tequeños', '2 Bebidas'],
    price: '22.00$',
    popular: true,
  },
  {
    name: 'Combo 3',
    title: 'Combo Familiar',
    image: menuTequenos,
    items: ['Arroz Chino Familiar', '24 Tequeños', '4 Bebidas'],
    price: '34.00$',
    popular: false,
  },
];

export function CombosSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="combos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Combos Especiales
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Ofertas <span className="text-primary">Irresistibles</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-3 gap-8 stagger-children',
            isRevealed && 'revealed'
          )}
        >
          {combos.map((combo, index) => (
            <div
              key={index}
              className={cn(
                'relative bg-card rounded-2xl overflow-hidden shadow-soft card-hover group',
                combo.popular && 'ring-2 ring-accent'
              )}
            >
              {combo.popular && (
                <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Popular
                </div>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img
                  src={combo.image}
                  alt={combo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-accent font-semibold text-sm">{combo.name}</span>
                  <h3 className="text-xl font-bold text-primary-foreground">{combo.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {combo.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-primary">{combo.price}</div>
                  <Button variant={combo.popular ? 'accent' : 'default'} asChild>
                    <a href="#contacto">Pedir Ahora</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
