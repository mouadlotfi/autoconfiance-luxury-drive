import { Button } from '@/components/ui/button';
import { ChevronDown, Shield, Award, Users } from 'lucide-react';
import heroImage from '@/assets/hero-showroom.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AUTOCONFIANCE Luxury Showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-8 opacity-0 animate-fade-in">
            <Shield className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium text-gold">Concessionnaire de Confiance</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight opacity-0 animate-fade-in animation-delay-200">
            L'Excellence 
            <span className="block text-gold-gradient">Automobile</span>
            À Votre Portée
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-400">
            Chez AUTOCONFIANCE, nous ne vendons pas seulement des voitures — nous construisons des relations de confiance. Chaque véhicule est sélectionné avec soin pour garantir votre satisfaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 opacity-0 animate-fade-in animation-delay-600">
            <Button variant="gold" size="xl">
              Découvrir Nos Véhicules
            </Button>
            <Button variant="gold-outline" size="xl">
              Nous Contacter
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-0 animate-fade-in-up animation-delay-600">
            <div className="flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Garantie</p>
                <p className="text-sm text-muted-foreground">Sur tous nos véhicules</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Qualité</p>
                <p className="text-sm text-muted-foreground">Véhicules inspectés</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <div>
                <p className="font-semibold text-foreground">+1000</p>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-gold transition-colors group"
      >
        <span className="text-sm font-medium">Découvrir</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
