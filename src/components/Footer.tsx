import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'À Propos', href: '#about' },
    { label: 'Nos Véhicules', href: '#cars' },
    { label: 'Contact', href: '#contact' },
  ];

  const carCategories = [
    { label: 'Citadines', href: '#cars' },
    { label: 'Berlines & Familiales', href: '#cars' },
    { label: 'SUV & Crossovers', href: '#cars' },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center shadow-gold">
                <span className="font-serif text-xl font-bold text-primary-foreground">A</span>
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">
                AUTO<span className="text-gold">CONFIANCE</span>
              </span>
            </a>
            <p className="text-cream/70 mb-6 leading-relaxed">
              Votre partenaire de confiance pour l'achat de véhicules d'occasion de qualité. 
              Excellence, transparence et satisfaction client.
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
                  <a 
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Categories */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6">Nos Véhicules</h4>
            <ul className="space-y-3">
              {carCategories.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
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
              <a href="#" className="text-cream/50 hover:text-gold transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-cream/50 hover:text-gold transition-colors">
                Politique de Confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
