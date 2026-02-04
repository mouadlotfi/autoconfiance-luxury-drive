import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cars, Car } from '@/data/cars';
import { X, Plus, Check, ChevronRight } from 'lucide-react';

const ComparePage = () => {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);
  const [showSelector, setShowSelector] = useState(false);

  const addCar = (car: Car) => {
    if (selectedCars.length < 3 && !selectedCars.find(c => c.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
    }
    setShowSelector(false);
  };

  const removeCar = (carId: string) => {
    setSelectedCars(selectedCars.filter(c => c.id !== carId));
  };

  const formatPrice = (price?: number) => {
    if (!price) return '-';
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

  const comparisonFields = [
    { label: 'Prix', key: 'price', format: formatPrice },
    { label: 'Année', key: 'year', format: (v: any) => v || '-' },
    { label: 'Kilométrage', key: 'mileage', format: formatMileage },
    { label: 'Carburant', key: 'fuel', format: (v: any) => v || '-' },
    { label: 'Transmission', key: 'transmission', format: (v: any) => v || '-' },
    { label: 'Catégorie', key: 'category', format: (v: any) => v === 'city' ? 'Citadine' : v === 'sedan' ? 'Berline' : 'SUV' },
    { label: 'Idéal pour', key: 'idealFor', format: (v: any) => v || '-' },
    { label: 'Utilisation', key: 'usage', format: (v: any) => v || '-' },
  ];

  return (
    <Layout>
      <PageHeader
        badge="Comparateur"
        title="Comparez les Véhicules"
        subtitle="Faites le bon choix"
        description="Sélectionnez jusqu'à 3 véhicules pour comparer leurs caractéristiques et trouver celui qui vous convient."
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          {/* Car Selection Slots */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[0, 1, 2].map((index) => {
              const car = selectedCars[index];
              
              if (car) {
                return (
                  <div 
                    key={index}
                    className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50"
                  >
                    <div className="relative">
                      <img 
                        src={car.image} 
                        alt={`${car.brand} ${car.name}`}
                        className="w-full h-48 object-contain bg-cream p-4"
                      />
                      <button
                        onClick={() => removeCar(car.id)}
                        className="absolute top-4 right-4 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-gold font-medium">{car.brand}</p>
                      <h3 className="font-serif text-xl font-bold text-foreground">{car.name}</h3>
                      <p className="text-lg font-semibold text-gold mt-2">{formatPrice(car.price)}</p>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={index}
                  onClick={() => setShowSelector(true)}
                  className="bg-secondary/50 border-2 border-dashed border-border rounded-2xl h-72 flex flex-col items-center justify-center gap-4 hover:border-gold/50 hover:bg-gold/5 transition-all group"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Plus className="w-8 h-8 text-gold" />
                  </div>
                  <p className="text-muted-foreground font-medium">Ajouter un véhicule</p>
                </button>
              );
            })}
          </div>

          {/* Comparison Table */}
          {selectedCars.length >= 2 && (
            <div className="bg-card rounded-2xl shadow-card overflow-hidden border border-border/50">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-foreground">
                        Caractéristique
                      </th>
                      {selectedCars.map((car) => (
                        <th key={car.id} className="px-6 py-4 text-left font-semibold text-foreground">
                          {car.brand} {car.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFields.map((field, index) => (
                      <tr key={field.key} className={index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'}>
                        <td className="px-6 py-4 font-medium text-foreground">
                          {field.label}
                        </td>
                        {selectedCars.map((car) => (
                          <td key={car.id} className="px-6 py-4 text-muted-foreground">
                            {field.format((car as any)[field.key])}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr className="bg-secondary">
                      <td className="px-6 py-4 font-medium text-foreground">
                        Équipements
                      </td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="px-6 py-4">
                          <ul className="space-y-1">
                            {car.features.map((feature, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                                <span className="text-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="px-6 py-4"></td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="px-6 py-4">
                          <Link to={`/cars/${car.id}`}>
                            <Button variant="gold" className="w-full">
                              Voir le véhicule
                              <ChevronRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedCars.length < 2 && (
            <div className="text-center py-12 bg-secondary rounded-2xl">
              <p className="text-muted-foreground">
                Sélectionnez au moins 2 véhicules pour les comparer
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Car Selector Modal */}
      {showSelector && (
        <div className="fixed inset-0 bg-charcoal/80 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-foreground">
                Sélectionner un véhicule
              </h3>
              <button 
                onClick={() => setShowSelector(false)}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cars.filter(c => !selectedCars.find(sc => sc.id === c.id)).map((car) => (
                  <button
                    key={car.id}
                    onClick={() => addCar(car)}
                    className="bg-secondary rounded-xl p-4 text-left hover:bg-gold/10 hover:border-gold border border-transparent transition-all"
                  >
                    <img 
                      src={car.image} 
                      alt={`${car.brand} ${car.name}`}
                      className="w-full h-24 object-contain mb-3"
                    />
                    <p className="text-xs text-gold font-medium">{car.brand}</p>
                    <p className="font-semibold text-foreground">{car.name}</p>
                    <p className="text-sm text-gold mt-1">{formatPrice(car.price)}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ComparePage;
