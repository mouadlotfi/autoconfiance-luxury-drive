import { useState, useMemo } from 'react';
import { useCars, useCategories } from '@/antigravity/hooks';
import CarCard from './CarCard';
import { Button } from '@/components/ui/button';
import { Car as CarIcon, Briefcase, Mountain, Truck, Loader2 } from 'lucide-react';
import { Car as StaticCar } from '@/data/cars';

// Helper to map DB category names to icons/keys (approximate)
const getCategoryIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes('berline') || lower.includes('sedan')) return Briefcase;
  if (lower.includes('suv') || lower.includes('4x4')) return Mountain;
  if (lower.includes('utilitaire') || lower.includes('truck') || lower.includes('van')) return Truck;
  return CarIcon; // Default (Citadine/City/Other)
};

const CarsSection = () => {
  // Fetch from Supabase
  const { data: dbCars, isLoading: carsLoading } = useCars();
  const { data: dbCategories, isLoading: catsLoading } = useCategories();

  const [activeCategoryId, setActiveCategoryId] = useState<string | 'all'>('all');
  const [showAll, setShowAll] = useState(false);

  // Transform DB data to UI format
  const transformedCars: StaticCar[] = useMemo(() => {
    if (!dbCars) return [];

    const mappedCars = dbCars.map(car => ({
      id: String(car.id), // UI expects string
      name: car.name,
      brand: car.name.split(' ')[0] || 'Unknown',
      model: car.name.split(' ').slice(1).join(' '),
      category: 'city', // Placeholder, UI uses badge logic mainly
      description: 'Véhicule disponible immédiatement.',
      features: ['Climatisation', 'Bluetooth', 'GPS'], // Defaults
      idealFor: 'Tous usages',
      comfort: 'Standard',
      usage: 'Polyvalent',
      image: car.image_url,
      // Use actual data from Supabase!
      year: car.annee || new Date().getFullYear(),
      mileage: car.kilometrage || 0,
      fuel: car.carburant || 'Essence',
      transmission: car.transmission || 'Manuelle',
      // Store original category ID for filtering if needed
      _categoryId: car.category_id
    } as unknown as StaticCar));

    // Deduplicate by ID
    const uniqueCarsMap = new Map<string, StaticCar>();
    mappedCars.forEach(car => {
      if (!uniqueCarsMap.has(car.id)) {
        uniqueCarsMap.set(car.id, car);
      }
    });

    return Array.from(uniqueCarsMap.values());
  }, [dbCars]);

  // Filter logic
  const activeCars = useMemo(() => {
    if (activeCategoryId === 'all') {
      // If 'all', maybe show everything or default to first category? 
      // Original UI defaulted to 'city'. Let's default to 'all' or first cat.
      // Better: Show All by default if 'all' selected.
      return transformedCars;
    }
    // @ts-ignore: _categoryId exists on our mapped object
    return transformedCars.filter(car => car._categoryId === activeCategoryId);
  }, [transformedCars, activeCategoryId]);

  const displayedCars = showAll ? activeCars : activeCars.slice(0, 6);

  // Set initial category once data loads
  if (activeCategoryId === 'all' && dbCategories && dbCategories.length > 0 && !showAll) {
    // Optional: Auto-select first category if you want to mimic old behavior
    // setActiveCategoryId(dbCategories[0].id);
  }

  if (carsLoading || catsLoading) {
    return (
      <section id="cars" className="py-24 bg-background flex justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-gold" />
      </section>
    );
  }

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
          <button
            onClick={() => { setActiveCategoryId('all'); setShowAll(false); }}
            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${activeCategoryId === 'all'
              ? 'bg-gold-gradient text-primary-foreground shadow-gold'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
          >
            <CarIcon className="w-5 h-5" />
            <span>Tous</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${activeCategoryId === 'all'
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-gold/10 text-gold'
              }`}>
              {transformedCars.length}
            </span>
          </button>

          {dbCategories?.map((category) => {
            const Icon = getCategoryIcon(category.name);
            // @ts-ignore
            const count = transformedCars.filter(c => c._categoryId === category.id).length;

            // Map category names to display labels
            let displayName = category.name;
            const lowerName = category.name.toLowerCase();

            if (lowerName.includes('sedan') || lowerName.includes('berline')) {
              displayName = 'Sedan';
            } else if (lowerName.includes('sport')) {
              displayName = 'Sports Car';
            } else if (lowerName.includes('suv') || lowerName.includes('4x4')) {
              displayName = 'SUV';
            } else if (lowerName.includes('citadine') || lowerName.includes('utilitaire')) {
              // Skip other old categories
              return null;
            }

            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategoryId(category.id);
                  setShowAll(false);
                }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${activeCategoryId === category.id
                  ? 'bg-gold-gradient text-primary-foreground shadow-gold'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span>{displayName}</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${activeCategoryId === category.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-gold/10 text-gold'
                  }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedCars.length > 0 ? displayedCars.map((car, index) => (
            <div
              key={car.id}
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <CarCard car={car} />
            </div>
          )) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              Aucun véhicule trouvé dans cette catégorie.
            </div>
          )}
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
