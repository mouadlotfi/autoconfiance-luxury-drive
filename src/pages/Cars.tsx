import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Car } from '@/data/cars';
import { useCars, useCategories } from '@/antigravity/hooks';
import CarCard from '@/components/CarCard';
import { Search, SlidersHorizontal, X, Loader2 } from 'lucide-react';

type CategoryKey = 'all' | 'city' | 'sedan' | 'suv';

const CarsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as CategoryKey) || 'all';

  // Fetch from Supabase
  const { data: dbCars, isLoading: carsLoading } = useCars();
  const { data: dbCategories, isLoading: catsLoading } = useCategories();

  const [activeCategory, setActiveCategory] = useState<CategoryKey>(initialCategory);
  const [activeCategoryId, setActiveCategoryId] = useState<string | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [yearRange, setYearRange] = useState<[number, number]>([1990, new Date().getFullYear()]);

  // Transform DB data to UI format
  const cars: Car[] = useMemo(() => {
    if (!dbCars) return [];

    const transformedCars = dbCars.map(car => ({
      id: String(car.id),
      name: car.name,
      brand: car.name.split(' ')[0] || 'Unknown',
      model: car.name.split(' ').slice(1).join(' '),
      category: 'city', // Placeholder
      description: 'Véhicule disponible immédiatement.',
      features: ['Climatisation', 'Bluetooth', 'GPS'],
      idealFor: 'Tous usages',
      comfort: 'Standard',
      usage: 'Polyvalent',
      image: car.image_url,
      year: car.annee || new Date().getFullYear(),
      mileage: car.kilometrage || 0,
      fuel: car.carburant || 'Essence',
      transmission: car.transmission || 'Manuelle',
      _categoryId: car.category_id
    } as unknown as Car));

    // Deduplicate by ID (in case database has duplicates)
    const uniqueCarsMap = new Map<string, Car>();
    transformedCars.forEach(car => {
      if (!uniqueCarsMap.has(car.id)) {
        uniqueCarsMap.set(car.id, car);
      }
    });

    return Array.from(uniqueCarsMap.values());
  }, [dbCars]);

  const handleCategoryChange = (category: CategoryKey, categoryId?: string) => {
    setActiveCategory(category);
    setActiveCategoryId(categoryId || 'all');
    if (category === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const getFilteredCars = () => {
    let filtered = cars;

    // Category filter by ID
    if (activeCategoryId !== 'all') {
      // @ts-ignore
      filtered = filtered.filter(car => car._categoryId === activeCategoryId);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(car =>
        car.name.toLowerCase().includes(query) ||
        car.brand.toLowerCase().includes(query)
      );
    }

    // Year filter - only apply if car has a year set
    filtered = filtered.filter(car =>
      !car.year || (car.year >= yearRange[0] && car.year <= yearRange[1])
    );

    return filtered;
  };

  const filteredCars = getFilteredCars();

  // Debug logging
  console.log('[Cars Page Debug]');
  console.log('DB Cars:', dbCars);
  console.log('DB Cars length:', dbCars?.length);
  console.log('Transformed cars:', cars);
  console.log('Transformed cars length:', cars.length);
  console.log('Active category ID:', activeCategoryId);
  console.log('Filtered cars:', filteredCars);
  console.log('Filtered cars length:', filteredCars.length);
  console.log('Year range:', yearRange);

  // Check for duplicates
  const carIds = cars.map(c => c.id);
  const uniqueIds = new Set(carIds);
  console.log('Total car IDs:', carIds.length, 'Unique car IDs:', uniqueIds.size);
  if (carIds.length !== uniqueIds.size) {
    console.warn('⚠️ DUPLICATE CAR IDs DETECTED!');
    console.log('Duplicate IDs:', carIds.filter((id, index) => carIds.indexOf(id) !== index));
  }

  const categories = [
    { key: 'all' as CategoryKey, label: 'Tous', count: cars.length, id: 'all' },
    ...(dbCategories?.map(cat => {
      const lowerName = cat.name.toLowerCase();
      let label = cat.name;
      let key: CategoryKey = 'city';

      if (lowerName.includes('sedan') || lowerName.includes('berline')) {
        label = 'Sedan';
        key = 'sedan';
      } else if (lowerName.includes('sport')) {
        label = 'Sports Car';
        key = 'sedan';
      } else if (lowerName.includes('suv') || lowerName.includes('4x4')) {
        label = 'SUV';
        key = 'suv';
      } else {
        return null; // Skip other categories
      }

      return {
        key,
        label,
        // @ts-ignore
        count: cars.filter(c => c._categoryId === cat.id).length,
        id: cat.id
      };
    }).filter(Boolean) || [])
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-MA', {
      style: 'currency',
      currency: 'MAD',
      maximumFractionDigits: 0,
    }).format(price);
  };


  if (carsLoading || catsLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <Loader2 className="w-10 h-10 animate-spin text-gold" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        badge="Notre Catalogue"
        title="Nos Véhicules"
        subtitle={`${cars.length} véhicules disponibles`}
        description="Découvrez notre sélection de véhicules d'occasion de qualité, soigneusement inspectés et garantis."
      />

      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher par marque ou modèle..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            <Button
              variant="gold-outline"
              className="md:w-auto"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filtres
            </Button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="bg-secondary rounded-xl p-6 mb-8 animate-fade-in">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Filtres</h3>
                <button onClick={() => setShowFilters(false)}>
                  <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Année: {yearRange[0]} - {yearRange[1]}
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="range"
                      min="2015"
                      max="2024"
                      value={yearRange[0]}
                      onChange={(e) => setYearRange([Number(e.target.value), yearRange[1]])}
                      className="flex-1 accent-gold"
                    />
                    <input
                      type="range"
                      min="2015"
                      max="2024"
                      value={yearRange[1]}
                      onChange={(e) => setYearRange([yearRange[0], Number(e.target.value)])}
                      className="flex-1 accent-gold"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category: any) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.key, category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${activeCategory === category.key
                  ? 'bg-gold-gradient text-primary-foreground shadow-gold'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
              >
                {category.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeCategory === category.key
                  ? 'bg-primary-foreground/20'
                  : 'bg-gold/10 text-gold'
                  }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground mb-6">
            {filteredCars.length} véhicule{filteredCars.length !== 1 ? 's' : ''} trouvé{filteredCars.length !== 1 ? 's' : ''}
          </p>

          {/* Cars Grid */}
          {filteredCars.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-secondary rounded-2xl">
              <p className="text-muted-foreground mb-4">
                Aucun véhicule ne correspond à vos critères.
              </p>
              <Button
                variant="gold-outline"
                onClick={() => {
                  setSearchQuery('');

                  setYearRange([2019, 2024]);
                  setActiveCategory('all');
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CarsPage;
