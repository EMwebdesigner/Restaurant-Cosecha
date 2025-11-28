import { useScrollReveal } from '@/hooks/useScrollReveal';
import menuArroz from '@/assets/menu-arroz.jpg';
import menuTequenos from '@/assets/menu-tequenos.jpg';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    name: 'Arroz Chino Venezolano',
    image: menuArroz,
    description: 'Nuestro famoso arroz frito con pollo, cerdo, camarones, vegetales frescos y el toque especial venezolano.',
    sizes: [
      { name: 'Personal', price: '8.50$' },
      { name: 'Mediano', price: '12.00$' },
      { name: 'Familiar', price: '18.00$' },
    ],
  },
  {
    name: 'Tequeños Artesanales',
    image: menuTequenos,
    description: 'Crujientes palitos de masa rellenos de queso derretido, preparados artesanalmente al momento.',
    sizes: [
      { name: '6 unidades', price: '5.00$' },
      { name: '12 unidades', price: '9.00$' },
      { name: '24 unidades', price: '16.00$' },
    ],
  },
];

export function MenuSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="menu" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Nuestro Menú
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Sabores que <span className="text-primary">Enamoran</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-2 gap-8 stagger-children',
            isRevealed && 'revealed'
          )}
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-soft card-hover group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-accent">
                    Tamaños y Precios
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {item.sizes.map((size, sizeIndex) => (
                      <div
                        key={sizeIndex}
                        className="text-center p-3 bg-muted rounded-xl border-2 border-transparent hover:border-accent transition-all duration-300 cursor-pointer group/size"
                      >
                        <div className="text-sm font-medium text-muted-foreground group-hover/size:text-foreground">
                          {size.name}
                        </div>
                        <div className="text-lg font-bold text-primary group-hover/size:text-accent transition-colors">
                          {size.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
