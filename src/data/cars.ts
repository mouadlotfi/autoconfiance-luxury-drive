import { carSeedData } from './carSeedData';

export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: 'city' | 'sedan' | 'suv' | 'utility';
  description: string;
  features: string[];
  idealFor: string;
  comfort: string;
  usage: string;
  image: string;
  price?: number;
  year?: number;
  mileage?: number;
  fuel?: string;
  transmission?: string;
}

export const carCategories = {
  city: {
    title: "Citadines & Compactes",
    subtitle: "Parfait pour la ville",
    description: "Des véhicules agiles et économiques, conçus pour la conduite urbaine au quotidien."
  },
  sedan: {
    title: "Berlines & Familiales",
    subtitle: "Confort et élégance",
    description: "Des véhicules spacieux et raffinés pour les familles et les professionnels exigeants."
  },
  suv: {
    title: "SUV & Crossovers",
    subtitle: "L'aventure vous attend",
    description: "Des véhicules polyvalents alliant style, espace et capacités pour tous vos trajets."
  },
  utility: {
    title: "Utilitaires & Autres",
    subtitle: "Professionnels & Loisirs",
    description: "Des solutions robustes pour vos besoins professionnels ou vos loisirs spécifiques."
  }
};

const descriptions = [
  "Véhicule fiable et économique, idéal pour le marché marocain.",
  "Excellent état, parfait pour la ville et les longs trajets.",
  "Robuste et spacieux, prêt pour toutes vos aventures.",
  "Maintenance facile et faible consommation.",
  "Le choix préféré des professionnels et des familles."
];

// Generate final list from seed data
export const cars: Car[] = carSeedData.map((seed, index) => {
  const year = Math.floor(Math.random() * (2024 - 2012 + 1)) + 2012;
  const mileage = Math.floor(Math.random() * 180000) + 10000;

  return {
    id: `${seed.brand.toLowerCase().replace(/\s+/g, '-')}-${seed.model.toLowerCase().replace(/\s+/g, '-')}-${index + 1}`,
    name: `${seed.brand} ${seed.model}`,
    brand: seed.brand,
    model: seed.model,
    category: seed.category,
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    features: ["Climatisation", "Bluetooth", "ABS", "Airbags", "Fermeture centralisée"],
    idealFor: seed.category === 'utility' ? "Professionnels" : seed.category === 'city' ? "Ville" : "Famille",
    comfort: "Standard",
    usage: seed.category === 'utility' ? "Transport" : "Polyvalent",
    image: seed.imageUrl,
    price: undefined,
    year: year,
    mileage: mileage,
    fuel: ["Diesel", "Essence"][Math.floor(Math.random() * 2)],
    transmission: Math.random() > 0.7 ? "Automatique" : "Manuelle"
  };
});

export const getCarById = (id: string) => cars.find(car => car.id === id);
