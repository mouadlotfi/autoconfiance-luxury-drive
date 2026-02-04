import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'À Propos', href: '/about' },
    { label: 'Nos Véhicules', href: '/cars' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Financement', href: '/finance' },
    { label: 'Prendre RDV', href: '/appointment' },
    { label: 'Comparer Véhicules', href: '/compare' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Témoignages', href: '/testimonials' },
  ];

  const carCategories = [
    { label: 'Citadines', href: '/cars?category=city' },
    { label: 'Berlines & Familiales', href: '/cars?category=sedan' },
    { label: 'SUV & Crossovers', href: '/cars?category=suv' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center shadow-gold">
                <span className="font-serif text-xl font-bold text-primary-foreground">A</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                AUTO<span className="text-gold">CONFIANCE</span>
              </span>
            </Link>
            <p className="text-cream/70 mb-6 leading-relaxed max-w-md">
              Votre partenaire de confiance pour l'achat de véhicules d'occasion de qualité. 
              Excellence, transparence et satisfaction client depuis plus de 10 ans.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-cream/10 hover:bg-gold rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream">+212 6 00 00 00 00</p>
                  <p className="text-cream/50 text-sm">Lun-Sam: 9h-19h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream">contact@autoconfiance.ma</p>
                  <p className="text-cream/50 text-sm">Réponse sous 24h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-cream">Casablanca, Maroc</p>
                  <p className="text-cream/50 text-sm">Visitez notre showroom</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {currentYear} AUTOCONFIANCE. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/legal" className="text-cream/50 hover:text-gold transition-colors">
                Mentions Légales
              </Link>
              <Link to="/privacy" className="text-cream/50 hover:text-gold transition-colors">
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
