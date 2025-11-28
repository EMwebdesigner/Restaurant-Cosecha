import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#menu', label: 'Menú' },
  { href: '#combos', label: 'Combos' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-secondary/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Tu Comida Venezolana" className="h-12 w-12 object-contain" />
          <span className="hidden md:block text-primary-foreground font-bold text-lg">
            Tu Comida Venezolana
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/90 hover:text-accent font-medium transition-colors duration-200 text-sm uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-primary-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary-foreground/90 hover:text-accent font-medium transition-colors duration-200 text-sm uppercase tracking-wide py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
