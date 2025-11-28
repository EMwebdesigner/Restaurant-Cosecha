import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: '¿Cuáles son los horarios de atención?',
    answer: 'Jueves: 19:00–23:00 | Viernes y Sábado: 12:00–16:00 y 18:00–23:00 | Domingo: 12:00–17:00 y 19:00–22:00',
  },
  {
    question: '¿Hacen entregas a domicilio?',
    answer: 'Sí, realizamos entregas en toda la zona. El tiempo estimado de entrega es de 30-45 minutos dependiendo de la ubicación.',
  },
  {
    question: '¿Puedo personalizar mi arroz chino?',
    answer: 'Por supuesto, puedes agregar o quitar ingredientes según tu preferencia. Solo indícalo al momento de hacer tu pedido.',
  },
  {
    question: '¿Los tequeños son aptos para vegetarianos?',
    answer: 'Sí, nuestros tequeños tradicionales son vegetarianos ya que solo contienen masa y queso.',
  },
  {
    question: '¿Cuáles son los métodos de pago?',
    answer: 'Aceptamos efectivo, tarjeta de crédito/débito y transferencia bancaria.',
  },
  {
    question: '¿Tienen opciones sin gluten?',
    answer: 'Nuestro arroz chino puede prepararse sin salsa de soja para hacerlo apto para personas con sensibilidad al gluten.',
  },
];

export function FAQSection() {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            ¿Tienes <span className="text-primary">Dudas</span>?
          </h2>
        </div>

        <div
          ref={ref}
          className={cn(
            'max-w-3xl mx-auto',
            isRevealed ? 'animate-fade-in' : 'opacity-0'
          )}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
