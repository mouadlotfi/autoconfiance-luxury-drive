// This file has been simplified - all car data now comes from Supabase
// Cars are managed through the Admin panel only

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
  _categoryId?: string; // For Supabase integration
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

// Empty array - all cars come from Supabase now
export const cars: Car[] = [];

// Helper function for backwards compatibility
export const getCarById = (id: string): Car | undefined => {
  return cars.find(car => car.id === id);
};
