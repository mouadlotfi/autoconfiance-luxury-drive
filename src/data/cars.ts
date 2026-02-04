import cityClio from '@/assets/cars/city-clio.png';
import cityGolf from '@/assets/cars/city-golf.png';
import sedan508 from '@/assets/cars/sedan-508.png';
import cityYaris from '@/assets/cars/city-yaris.png';
import sedanCivic from '@/assets/cars/sedan-civic.png';
import suvDuster from '@/assets/cars/suv-duster.png';

export interface Car {
  id: string;
  name: string;
  brand: string;
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

// Placeholder images mapping
const categoryImages = {
  city: [cityClio, cityGolf, cityYaris],
  sedan: [sedan508, sedanCivic],
  suv: [suvDuster],
  utility: [suvDuster] // Fallback for utility for now
};

const brands = {
  city: ['Renault', 'Peugeot', 'Dacia', 'Citroën', 'Volkswagen', 'Fiat', 'Hyundai', 'Kia', 'Toyota', 'Opel'],
  sedan: ['Mercedes-Benz', 'BMW', 'Audi', 'Volkswagen', 'Peugeot', 'Skoda', 'Toyota', 'Volvo'],
  suv: ['Range Rover', 'BMW', 'Audi', 'Mercedes-Benz', 'Volkswagen', 'Hyundai', 'Kia', 'Toyota', 'Jeep', 'Dacia'],
  utility: ['Renault', 'Peugeot', 'Citroën', 'Ford', 'Fiat', 'Volkswagen', 'Mercedes-Benz']
};

const models = {
  city: ['Clio', '208', 'Sandero', 'C3', 'Polo', '500', 'i20', 'Rio', 'Yaris', 'Corsa', 'Ibiza', 'Fabia', 'Picanto', 'Micra', 'Swift'],
  sedan: ['Classe C', 'Série 3', 'A4', 'Passat', '508', 'Octavia', 'Camry', 'S60', 'Classe E', 'Série 5', 'A6', 'Superb'],
  suv: ['Evoque', 'X1', 'Q3', 'GLA', 'Tiguan', 'Tucson', 'Sportage', 'RAV4', 'Compass', 'Duster', 'X3', 'Q5', 'GLC', 'Touareg'],
  utility: ['Kangoo', 'Partner', 'Berlingo', 'Transit', 'Doblo', 'Caddy', 'Vito', 'Traffic', 'Expert', 'Jumpy']
};

const descriptions = [
  "Un véhicule exceptionnel alliant confort et performance.",
  "Parfaitement entretenu, ce véhicule offre une expérience de conduite unique.",
  "Idéal pour vos trajets quotidiens, économique et fiable.",
  "Une opportunité à saisir, état impeccable et faible kilométrage.",
  "Confort premium et technologies embarquées de dernière génération."
];

// Generate 200 cars
const generateCars = (): Car[] => {
  const generatedCars: Car[] = [];
  const totalCars = 200;

  // Distribution: 60 City, 50 Sedan, 60 SUV, 30 Utility
  const distribution = { city: 60, sedan: 50, suv: 60, utility: 30 };

  let idCounter = 1;

  (Object.keys(distribution) as Array<keyof typeof distribution>).forEach(category => {
    const count = distribution[category];
    const categoryBrandList = brands[category];
    const categoryModelList = models[category];
    const catImages = categoryImages[category];

    for (let i = 0; i < count; i++) {
      const brand = categoryBrandList[Math.floor(Math.random() * categoryBrandList.length)];
      const model = categoryModelList[Math.floor(Math.random() * categoryModelList.length)];
      const year = Math.floor(Math.random() * (2024 - 2016 + 1)) + 2016;
      const mileage = Math.floor(Math.random() * 120000) + 10000;
      const price = Math.floor(Math.random() * (category === 'sedan' || category === 'suv' ? 400000 : 200000)) + 80000;

      generatedCars.push({
        id: `${category}-${brand.toLowerCase()}-${model.toLowerCase()}-${idCounter++}`,
        name: `${model} ${year}`,
        brand: brand,
        category: category,
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        features: ["Climatisation", "Bluetooth", "ABS", "Airbags", "Régulateur de vitesse"],
        idealFor: category === 'utility' ? "Usage professionnel" : "Famille et quotidien",
        comfort: "Standard supérieur",
        usage: "Polyvalent",
        image: catImages[Math.floor(Math.random() * catImages.length)],
        price: price,
        year: year,
        mileage: mileage,
        fuel: Math.random() > 0.5 ? "Diesel" : "Essence",
        transmission: Math.random() > 0.7 ? "Automatique" : "Manuelle"
      });
    }
  });

  return generatedCars.sort(() => Math.random() - 0.5); // Shuffle
};

export const cars = generateCars();

export const getCarById = (id: string) => cars.find(car => car.id === id);
