import { Car } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, Fuel, Calendar, Gauge, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
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

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50">
      {/* Image Container */}
      <div className="relative h-52 bg-gradient-to-br from-cream to-cream-dark overflow-hidden">
        <img 
          src={car.image} 
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-gold/90 text-primary-foreground text-xs font-semibold rounded-full uppercase tracking-wide shadow-lg">
            {car.category === 'city' ? 'Citadine' : car.category === 'sedan' ? 'Berline' : 'SUV'}
          </span>
        </div>

        {/* Year Badge */}
        {car.year && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-charcoal/90 text-cream text-xs font-semibold rounded-full">
              {car.year}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Price */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-sm text-gold font-medium uppercase tracking-wide">{car.brand}</p>
            <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-gold transition-colors">
              {car.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="font-serif text-xl font-bold text-gold">
              {formatPrice(car.price)}
            </p>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Gauge className="w-4 h-4 text-gold" />
            <span>{formatMileage(car.mileage)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Fuel className="w-4 h-4 text-gold" />
            <span>{car.fuel || 'Essence'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Settings className="w-4 h-4 text-gold" />
            <span>{car.transmission || 'Manuelle'}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-gold" />
            <span>{car.year || 2023}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {car.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <Link to={`/cars/${car.id}`} className="flex-1">
            <Button variant="gold-outline" className="w-full group/btn">
              <span>Détails</span>
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to={`/appointment?car=${car.id}`}>
            <Button variant="gold">
              RDV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
