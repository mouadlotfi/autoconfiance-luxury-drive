import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { useParams, Link } from 'react-router-dom';
import { getCarById, cars } from '@/data/cars';
import CarCard from '@/components/CarCard';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Shield,
  Phone,
  MessageSquare
} from 'lucide-react';

const CarDetailPage = () => {
  const { id } = useParams();
  const car = id ? getCarById(id) : null;

  if (!car) {
    return (
      <Layout>
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Véhicule Non Trouvé
            </h1>
            <p className="text-muted-foreground mb-8">
              Le véhicule que vous recherchez n'existe pas ou n'est plus disponible.
            </p>
            <Link to="/cars">
              <Button variant="gold">
                Voir tous les véhicules
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const formatPrice = (price?: number) => {
    if (!price) return 'Prix sur demande';
    return new Intl.NumberFormat('fr-MA', {
      style: 'currency',
      currency: 'MAD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (km?: number) => {
    if (!km) return '-';
    return new Intl.NumberFormat('fr-MA').format(km) + ' km';
  };

  // Get similar cars
  const similarCars = cars
    .filter(c => c.category === car.category && c.id !== car.id)
    .slice(0, 3);

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-secondary">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-gold transition-colors">Accueil</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/cars" className="hover:text-gold transition-colors">Véhicules</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{car.brand} {car.name}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="bg-gradient-to-br from-cream to-cream-dark rounded-2xl p-8 flex items-center justify-center">
              <img
                src={car.image}
                alt={`${car.brand} ${car.name}`}
                className="max-w-full max-h-80 object-contain"
              />
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full">
                  {car.category === 'city' ? 'Citadine' : car.category === 'sedan' ? 'Berline' : 'SUV'}
                </span>
                {car.year && (
                  <span className="px-3 py-1 bg-charcoal text-cream text-sm font-medium rounded-full">
                    {car.year}
                  </span>
                )}
              </div>

              <p className="text-gold font-medium uppercase tracking-wide mb-2">{car.brand}</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                {car.name}
              </h1>

              <p className="font-serif text-3xl font-bold text-gold mb-6">
                Contactez-nous pour le tarif
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card rounded-xl p-4 flex items-center gap-3">
                  <Gauge className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-xs text-muted-foreground">Kilométrage</p>
                    <p className="font-semibold text-foreground">{formatMileage(car.mileage)}</p>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 flex items-center gap-3">
                  <Fuel className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-xs text-muted-foreground">Carburant</p>
                    <p className="font-semibold text-foreground">{car.fuel || 'Essence'}</p>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-xs text-muted-foreground">Transmission</p>
                    <p className="font-semibold text-foreground">{car.transmission || 'Manuelle'}</p>
                  </div>
                </div>
                <div className="bg-card rounded-xl p-4 flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-gold" />
                  <div>
                    <p className="text-xs text-muted-foreground">Année</p>
                    <p className="font-semibold text-foreground">{car.year || 2023}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+212661299420" className="flex-1">
                  <Button variant="gold" size="xl" className="w-full">
                    <Phone className="w-5 h-5 mr-2" />
                    Appeler
                  </Button>
                </a>
                <a href="https://wa.me/212661299420" target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="gold-outline" size="xl" className="w-full">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Description & Features */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {car.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Équipements & Caractéristiques
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-xl">
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Idéal Pour
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {car.idealFor}
                </p>
                <div className="bg-gold/10 border border-gold/30 rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">Confort</h3>
                  <p className="text-muted-foreground text-sm">{car.comfort}</p>
                </div>
              </div>

              {/* Usage */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Utilisation Recommandée
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {car.usage}
                </p>
              </div>
            </div>

            {/* Right: Sticky Contact Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-card rounded-2xl shadow-card p-8 border border-border/50">
                <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                  Intéressé par ce véhicule ?
                </h3>

                {/* Warranty Badge */}
                <div className="bg-gold/10 rounded-xl p-4 mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-gold" />
                  <div>
                    <p className="font-semibold text-foreground">Garantie Incluse</p>
                    <p className="text-sm text-muted-foreground">6 mois minimum</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <a href="tel:+212661299420">
                    <Button variant="gold" className="w-full" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler
                    </Button>
                  </a>
                  <a href="https://wa.me/212661299420" target="_blank" rel="noopener noreferrer">
                    <Button variant="gold-outline" className="w-full" size="lg">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>

                <Link to="/finance">
                  <div className="bg-secondary rounded-xl p-4 hover:bg-secondary/80 transition-colors cursor-pointer">
                    <p className="font-medium text-foreground mb-1">Besoin d'un financement ?</p>
                    <p className="text-sm text-muted-foreground">Simulez votre crédit →</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Cars */}
      {similarCars.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Véhicules Similaires
              </h2>
              <Link to="/cars">
                <Button variant="ghost" className="text-gold">
                  Voir tout
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarCars.map((similarCar) => (
                <CarCard key={similarCar.id} car={similarCar} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default CarDetailPage;
