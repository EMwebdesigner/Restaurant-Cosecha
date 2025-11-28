import logo from '@/assets/logo.png';
import { Phone, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Tu Comida Venezolana" className="h-12 w-12 object-contain" />
              <span className="font-bold text-xl">Tu Comida Venezolana</span>
            </div>
            <p className="text-secondary-foreground/70 max-w-sm">
              Arroz Chino y Tequeños con auténtico sabor venezolano. 
              Llevamos el mejor sabor de nuestra tierra a tu mesa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  Menú
                </a>
              </li>
              <li>
                <a href="#combos" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  Combos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-secondary-foreground/70 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Schedule */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Horario Resumido</h4>
            <ul className="space-y-2 text-secondary-foreground/70 text-sm">
              <li>Jue: 19:00 – 23:00</li>
              <li>Vie-Sáb: 12:00 – 23:00</li>
              <li>Dom: 12:00 – 22:00</li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors icon-bounce"
              aria-label="WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/tucomidavenezolana"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors icon-bounce"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@tucomidavenezolana.com"
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors icon-bounce"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} Tu Comida Venezolana. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
