import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Clock, MapPin, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const schedule = [
  { day: 'Jueves', hours: '19:00 – 23:00' },
  { day: 'Viernes', hours: '12:00 – 16:00 / 18:00 – 23:00' },
  { day: 'Sábado', hours: '12:00 – 16:00 / 18:00 – 23:00' },
  { day: 'Domingo', hours: '12:00 – 17:00 / 19:00 – 22:00' },
];

const contactInfo = [
  { icon: Phone, label: 'Teléfono', value: '+58 412-3456789', href: 'tel:+34600000000' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+58 412-3456789', href: 'https://wa.me/34600000000' },
  { icon: Mail, label: 'Email', value: 'info@restaurantokcosecha.com', href: 'mailto:info@tucomidavenezolana.com' },
  { icon: MapPin, label: 'Ubicación', value: 'Zulia, Maracaibo', href: '#' },
];

export function ContactSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contacto" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Contacto
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            ¡Haz tu <span className="text-primary">Pedido</span>!
          </h2>
        </div>

        <div
          ref={ref}
          className={cn(
            'grid md:grid-cols-2 gap-12',
            isRevealed && 'revealed'
          )}
        >
          {/* Schedule */}
          <div
            className={cn(
              'bg-card rounded-2xl p-8 shadow-soft',
              isRevealed ? 'animate-slide-right' : 'opacity-0'
            )}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Horario</h3>
            </div>
            
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="font-semibold text-foreground">{item.day}</span>
                  <span className="text-muted-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={cn(
              'space-y-6',
              isRevealed ? 'animate-slide-left' : 'opacity-0'
            )}
            style={{ animationDelay: '0.2s' }}
          >
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-accent transition-colors icon-bounce">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            <div className="pt-4">
              <Button variant="whatsapp" size="xl" className="w-full" asChild>
                <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Pedir por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
