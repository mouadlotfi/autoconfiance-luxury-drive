import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';




const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Accueil' },
    {
      href: '/about',
      label: 'À Propos',
    },
    {
      href: '/cars',
      label: 'Véhicules',
      children: [
        { href: '/cars?category=city', label: 'Citadines' },
        { href: '/cars?category=sedan', label: 'Berlines' },
        { href: '/cars?category=suv', label: 'SUV' },
        { href: '/compare', label: 'Comparer' },
      ]
    },
    {
      href: '/services',
      label: 'Services',
      children: [
        { href: '/services', label: 'Tous nos services' },
        { href: '/finance', label: 'Financement' },
      ]
    },
    { href: '/testimonials', label: 'Témoignages' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href.split('?')[0]);
  };
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-background/95 backdrop-blur-md shadow-card py-3'
        : 'bg-background/80 backdrop-blur-sm py-4'
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div>
              <span className="font-serif text-xl font-bold text-foreground tracking-tight">
                AUTO<span className="text-gold-gradient">CONFIANCE</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${isActive(link.href)
                    ? 'text-gold bg-gold/10'
                    : 'text-foreground/80 hover:text-gold hover:bg-gold/5'
                    }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 bg-card rounded-xl shadow-card-hover border border-border/50 py-2 min-w-[200px] animate-fade-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-foreground/80 hover:text-gold hover:bg-gold/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center gap-4">
            <a href="https://wa.me/212661299420" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-gold transition-colors">
              <Phone className="w-4 h-4 text-gold" />
              <span>+212 661-299420</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-foreground hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden mt-4 pb-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => !link.children && setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive(link.href)
                      ? 'text-gold bg-gold/10'
                      : 'text-foreground/80 hover:text-gold hover:bg-gold/5'
                      }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 border-l-2 border-gold/20 pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-sm text-muted-foreground hover:text-gold transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2 text-muted-foreground text-sm py-3 px-4">
                <Phone className="w-4 h-4 text-gold" />
                <span>+212 661-299420</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
