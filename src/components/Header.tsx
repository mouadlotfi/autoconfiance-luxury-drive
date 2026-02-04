import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À Propos' },
    { href: '#cars', label: 'Nos Véhicules' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-card py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform duration-300">
              <span className="font-serif text-xl font-bold text-primary-foreground">A</span>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold text-foreground tracking-tight">
                AUTO<span className="text-gold-gradient">CONFIANCE</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-gold font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Phone className="w-4 h-4 text-gold" />
              <span>+212 6 00 00 00 00</span>
            </div>
            <Button variant="gold" size="lg">
              Prendre RDV
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-gold font-medium transition-colors duration-300 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 text-muted-foreground text-sm py-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>+212 6 00 00 00 00</span>
              </div>
              <Button variant="gold" className="mt-2">
                Prendre RDV
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
