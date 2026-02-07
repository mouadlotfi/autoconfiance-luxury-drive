import { useState } from 'react';
import { cars, carCategories } from '@/data/cars';
import CarCard from './CarCard';
import { Button } from '@/components/ui/button';
import { Car, Briefcase, Mountain, Truck } from 'lucide-react';

type CategoryKey = 'city' | 'sedan' | 'suv' | 'utility';

const CarsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('city');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { key: 'city' as CategoryKey, label: 'Citadines', icon: Car, count: cars.filter(c => c.category === 'city').length },
    { key: 'sedan' as CategoryKey, label: 'Berlines', icon: Briefcase, count: cars.filter(c => c.category === 'sedan').length },
    { key: 'suv' as CategoryKey, label: 'SUV', icon: Mountain, count: cars.filter(c => c.category === 'suv').length },
    { key: 'utility' as CategoryKey, label: 'Utilitaires', icon: Truck, count: cars.filter(c => c.category === 'utility').length },
  ];

  const getActiveCars = () => {
    return cars.filter(car => car.category === activeCategory);
  };

  const activeCars = getActiveCars();
  const displayedCars = showAll ? activeCars : activeCars.slice(0, 6);
  const categoryInfo = carCategories[activeCategory];

  return (
    <section id="cars" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-gold font-medium uppercase tracking-widest text-sm mb-4 block">
            Notre Catalogue
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Des Véhicules d'Exception
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Découvrez notre sélection de véhicules soigneusement choisis.
            Chaque voiture a été inspectée et préparée pour vous offrir le meilleur.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => {
                setActiveCategory(category.key);
                setShowAll(false);
              }}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${activeCategory === category.key
                ? 'bg-gold-gradient text-primary-foreground shadow-gold'
                : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.label}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${activeCategory === category.key
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-gold/10 text-gold'
                }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Category Info */}
        <div className="text-center mb-12 bg-secondary rounded-2xl p-8">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
            {categoryInfo.title}
          </h3>
          <p className="text-gold font-medium mb-2">{categoryInfo.subtitle}</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {categoryInfo.description}
          </p>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedCars.map((car, index) => (
            <div
              key={car.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {activeCars.length > 6 && (
          <div className="text-center">
            <Button
              variant="gold-outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Voir Moins' : `Voir Tous les ${activeCars.length} Véhicules`}
            </Button>
          </div>
        )}

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center bg-secondary/50 rounded-2xl p-8 max-w-2xl mx-auto border border-gold/10">
          <p className="text-lg text-muted-foreground mb-4">
            Vous ne trouvez pas ce que vous cherchez ? Nous avons plus de véhicules en stock.
          </p>
          <Button
            variant="gold"
            size="lg"
            className="gap-2"
            onClick={() => window.open('https://wa.me/212661299420', '_blank')}
          >
            <span className="font-semibold">Contactez-nous sur WhatsApp</span>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default CarsSection;
