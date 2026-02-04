import { Car } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, Fuel, Users, Settings } from 'lucide-react';

interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-cream to-cream-dark overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {/* Placeholder for car image - shows brand initial as fallback */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-2">
                <span className="font-serif text-4xl font-bold text-gold">{car.brand[0]}</span>
              </div>
              <p className="text-sm text-muted-foreground">{car.brand}</p>
            </div>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-gold/90 text-primary-foreground text-xs font-semibold rounded-full uppercase tracking-wide">
            {car.category === 'city' ? 'Citadine' : car.category === 'sedan' ? 'Berline' : 'SUV'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="mb-4">
          <p className="text-sm text-gold font-medium uppercase tracking-wide">{car.brand}</p>
          <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-gold transition-colors">
            {car.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {car.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-4">
          {car.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Ideal For */}
        <div className="bg-secondary rounded-lg p-3 mb-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Idéal pour</p>
          <p className="text-sm text-foreground font-medium">{car.idealFor}</p>
        </div>

        {/* Usage */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>Économique</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="w-4 h-4" />
            <span>Fiable</span>
          </div>
        </div>

        {/* CTA */}
        <Button variant="gold-outline" className="w-full group/btn">
          <span>En Savoir Plus</span>
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
