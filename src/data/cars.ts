// Car images mapping
import suvDuster from '@/assets/cars/suv-duster.png';
import cityClio from '@/assets/cars/city-clio.png';
import cityGolf from '@/assets/cars/city-golf.png';
import sedan508 from '@/assets/cars/sedan-508.png';
import cityYaris from '@/assets/cars/city-yaris.png';
import sedanCivic from '@/assets/cars/sedan-civic.png';

export interface Car {
  id: string;
  name: string;
  brand: string;
  category: 'city' | 'sedan' | 'suv';
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
    title: "City Cars & Compacts",
    subtitle: "Perfect for urban mobility",
    description: "Agile, fuel-efficient vehicles designed for city driving and everyday commutes."
  },
  sedan: {
    title: "Sedans & Family Cars",
    subtitle: "Comfort meets elegance",
    description: "Spacious, refined vehicles for families and professionals who value comfort."
  },
  suv: {
    title: "SUVs & Crossovers",
    subtitle: "Adventure awaits",
    description: "Versatile vehicles combining style, space, and capability for any journey."
  }
};

// Map specific cars to images
const carImageMap: Record<string, string> = {
  'renault-clio': cityClio,
  'volkswagen-golf': cityGolf,
  'toyota-yaris': cityYaris,
  'peugeot-508': sedan508,
  'honda-civic': sedanCivic,
  'dacia-duster': suvDuster,
};

// Default images per category
const categoryDefaultImages: Record<string, string> = {
  city: cityClio,
  sedan: sedan508,
  suv: suvDuster,
};

type CarData = Omit<Car, 'image' | 'price' | 'year' | 'mileage' | 'fuel' | 'transmission'>;

const carData: CarData[] = [
  // City Cars & Compacts
  {
    id: "dacia-logan",
    name: "Logan",
    brand: "Dacia",
    category: "city",
    description: "The Dacia Logan offers exceptional value with generous interior space and proven reliability. A practical choice for budget-conscious drivers who refuse to compromise on quality.",
    features: ["Spacious trunk", "Fuel efficient", "Low maintenance costs", "Modern infotainment"],
    idealFor: "Budget-conscious families and first-time car buyers",
    comfort: "Comfortable seating with ample legroom for all passengers",
    usage: "City driving, daily commutes, and family trips"
  },
  {
    id: "dacia-sandero",
    name: "Sandero",
    brand: "Dacia",
    category: "city",
    description: "The Dacia Sandero combines affordability with style, offering modern features at an unbeatable price point. Perfect for those seeking quality without the premium price tag.",
    features: ["Affordable pricing", "Modern design", "Efficient engines", "Good cargo space"],
    idealFor: "Young professionals and cost-conscious buyers",
    comfort: "Well-designed cabin with practical storage solutions",
    usage: "Urban commuting and weekend getaways"
  },
  {
    id: "renault-clio",
    name: "Clio",
    brand: "Renault",
    category: "city",
    description: "The Renault Clio is a stylish supermini that has won hearts across Europe. With its refined interior and dynamic handling, it makes every journey enjoyable.",
    features: ["Premium interior", "Advanced safety", "Hybrid options", "Responsive handling"],
    idealFor: "Style-conscious urbanites who appreciate French elegance",
    comfort: "Plush seating with premium materials and quiet cabin",
    usage: "City driving with capability for longer journeys"
  },
  {
    id: "renault-twingo",
    name: "Twingo",
    brand: "Renault",
    category: "city",
    description: "The Renault Twingo is the ultimate city companion. Its compact dimensions and rear-engine layout provide exceptional maneuverability in tight urban spaces.",
    features: ["Ultra compact", "Tight turning circle", "Customizable options", "Fun to drive"],
    idealFor: "City dwellers needing the perfect parking companion",
    comfort: "Surprisingly spacious interior for its size",
    usage: "Pure city driving and short urban trips"
  },
  {
    id: "peugeot-206",
    name: "206",
    brand: "Peugeot",
    category: "city",
    description: "The Peugeot 206 is a proven classic that combines French style with reliability. A practical choice offering excellent driving dynamics and economical operation.",
    features: ["Iconic design", "Nimble handling", "Low running costs", "Reliable mechanics"],
    idealFor: "Those seeking a trusted, affordable city companion",
    comfort: "Ergonomic interior with supportive seating",
    usage: "Daily commuting and city exploration"
  },
  {
    id: "peugeot-207",
    name: "207",
    brand: "Peugeot",
    category: "city",
    description: "The Peugeot 207 builds on its predecessor's success with improved refinement and modern styling. A versatile hatchback for diverse driving needs.",
    features: ["Refined cabin", "Improved safety", "Panoramic roof option", "Efficient engines"],
    idealFor: "Drivers seeking French flair with practical benefits",
    comfort: "Enhanced sound insulation and comfortable ride",
    usage: "Versatile daily driving and occasional trips"
  },
  {
    id: "peugeot-208",
    name: "208",
    brand: "Peugeot",
    category: "city",
    description: "The Peugeot 208 brings cutting-edge French design to the supermini segment. Its 3D i-Cockpit and bold styling make it a true head-turner.",
    features: ["3D i-Cockpit", "Electric option", "Bold design", "Premium tech"],
    idealFor: "Tech-savvy drivers who appreciate innovative design",
    comfort: "Driver-focused cockpit with premium materials",
    usage: "Modern urban mobility with electric capability"
  },
  {
    id: "peugeot-301",
    name: "301",
    brand: "Peugeot",
    category: "city",
    description: "The Peugeot 301 offers sedan comfort in a compact package. Built for reliability and practicality, it's perfect for those seeking space without size.",
    features: ["Sedan space", "Durable build", "Economical", "Comfortable ride"],
    idealFor: "Families needing sedan practicality in a compact form",
    comfort: "Generous rear legroom and trunk capacity",
    usage: "Family transport and professional use"
  },
  {
    id: "citroen-c3",
    name: "C3",
    brand: "Citroën",
    category: "city",
    description: "The Citroën C3 brings personality to the road with its distinctive design and unmatched comfort. The Advanced Comfort seats make every journey a pleasure.",
    features: ["Airbump panels", "Advanced Comfort seats", "Zenith windscreen", "Unique styling"],
    idealFor: "Those who value comfort and individual style",
    comfort: "Legendary Citroën suspension and plush seating",
    usage: "Comfortable city driving and relaxed cruising"
  },
  {
    id: "citroen-c-elysee",
    name: "C-Elysée",
    brand: "Citroën",
    category: "city",
    description: "The Citroën C-Elysée combines classic sedan elegance with Citroën's renowned comfort. A refined choice for those who appreciate traditional automotive values.",
    features: ["Classic sedan design", "Spacious interior", "Smooth ride", "Reliable engines"],
    idealFor: "Traditional buyers seeking sedan refinement",
    comfort: "Exceptional ride quality on all road surfaces",
    usage: "Professional transport and family journeys"
  },
  {
    id: "opel-corsa",
    name: "Corsa",
    brand: "Opel",
    category: "city",
    description: "The Opel Corsa is German engineering at its finest. Precise handling, quality build, and efficient powertrains make it a smart choice for discerning drivers.",
    features: ["German precision", "IntelliLux LED", "Electric variant", "Connected services"],
    idealFor: "Quality-focused buyers seeking German reliability",
    comfort: "Well-built cabin with excellent ergonomics",
    usage: "Versatile daily driving with premium feel"
  },
  {
    id: "opel-astra",
    name: "Astra",
    brand: "Opel",
    category: "city",
    description: "The Opel Astra represents the pinnacle of compact car engineering. Advanced technology and refined dynamics deliver a premium driving experience.",
    features: ["Pure Panel display", "Advanced driver aids", "Efficient powertrains", "Premium build"],
    idealFor: "Tech enthusiasts and quality-conscious drivers",
    comfort: "Ergonomic AGR-certified seats available",
    usage: "Long-distance comfort and daily excellence"
  },
  {
    id: "volkswagen-polo",
    name: "Polo",
    brand: "Volkswagen",
    category: "city",
    description: "The Volkswagen Polo brings Golf-like quality to a compact package. Its refined manners and solid build quality set the standard in its class.",
    features: ["Premium quality", "Digital cockpit", "Driver assistance", "Quiet cabin"],
    idealFor: "Those seeking VW quality in a smaller package",
    comfort: "Golf-derived comfort and refinement",
    usage: "Quality daily transport and beyond"
  },
  {
    id: "volkswagen-golf",
    name: "Golf",
    brand: "Volkswagen",
    category: "city",
    description: "The Volkswagen Golf is the benchmark by which all others are measured. Eight generations of perfection have created the definitive compact car.",
    features: ["Benchmark handling", "Premium interior", "Advanced tech", "Multiple powertrains"],
    idealFor: "Discerning drivers who accept only the best",
    comfort: "Class-leading refinement and build quality",
    usage: "The complete all-rounder for any occasion"
  },
  {
    id: "toyota-yaris",
    name: "Yaris",
    brand: "Toyota",
    category: "city",
    description: "The Toyota Yaris combines Japanese reliability with exceptional hybrid efficiency. Award-winning engineering in a stylish, compact package.",
    features: ["Hybrid efficiency", "Toyota reliability", "Compact dimensions", "Low emissions"],
    idealFor: "Eco-conscious drivers valuing reliability",
    comfort: "Well-insulated cabin with quality materials",
    usage: "Efficient city driving and eco-friendly transport"
  },
  {
    id: "toyota-corolla",
    name: "Corolla",
    brand: "Toyota",
    category: "city",
    description: "The Toyota Corolla is the world's best-selling car for good reason. Legendary reliability meets modern design and hybrid technology.",
    features: ["World-renowned reliability", "Hybrid powertrain", "Toyota Safety Sense", "Comfortable ride"],
    idealFor: "Those seeking the most trusted name in automotive",
    comfort: "Refined cabin with excellent noise insulation",
    usage: "Reliable daily transport and family journeys"
  },
  {
    id: "hyundai-i10",
    name: "i10",
    brand: "Hyundai",
    category: "city",
    description: "The Hyundai i10 proves great things come in small packages. Surprisingly spacious with modern features, it's the clever choice for city life.",
    features: ["City-sized", "Big on features", "5-year warranty", "Modern design"],
    idealFor: "Urban dwellers seeking maximum car in minimum space",
    comfort: "Unexpectedly roomy and well-equipped",
    usage: "Pure city driving with surprising versatility"
  },
  {
    id: "hyundai-i20",
    name: "i20",
    brand: "Hyundai",
    category: "city",
    description: "The Hyundai i20 delivers style, technology, and value in equal measure. Korean innovation with European design sensibility.",
    features: ["Bold styling", "Digital cockpit", "Bose audio option", "Comprehensive safety"],
    idealFor: "Style-conscious buyers seeking value",
    comfort: "Well-appointed interior with premium touches",
    usage: "Stylish daily driving and weekend trips"
  },
  {
    id: "kia-picanto",
    name: "Picanto",
    brand: "Kia",
    category: "city",
    description: "The Kia Picanto is the stylish city car that punches above its weight. Distinctive design and Kia's legendary warranty make it a smart choice.",
    features: ["Distinctive styling", "7-year warranty", "Connected car features", "Agile handling"],
    idealFor: "Fashion-forward city dwellers",
    comfort: "Thoughtfully designed compact cabin",
    usage: "Urban lifestyle and style-conscious mobility"
  },
  {
    id: "kia-rio",
    name: "Rio",
    brand: "Kia",
    category: "city",
    description: "The Kia Rio combines athletic styling with practical credentials. A well-rounded supermini backed by industry-leading warranty coverage.",
    features: ["Athletic design", "7-year warranty", "ISG technology", "Versatile cabin"],
    idealFor: "Active individuals seeking style and practicality",
    comfort: "Refined ride with supportive seating",
    usage: "Active lifestyle support and daily driving"
  },
  {
    id: "fiat-punto",
    name: "Punto",
    brand: "Fiat",
    category: "city",
    description: "The Fiat Punto brings Italian passion to practical motoring. Expressive styling and engaging dynamics make everyday driving enjoyable.",
    features: ["Italian design", "Engaging drive", "City-friendly size", "Characterful engine"],
    idealFor: "Those who appreciate Italian automotive passion",
    comfort: "Stylish interior with European flair",
    usage: "Spirited city driving and Italian lifestyle"
  },
  {
    id: "seat-ibiza",
    name: "Ibiza",
    brand: "SEAT",
    category: "city",
    description: "The SEAT Ibiza adds Spanish flair to German engineering. Dynamic styling and engaging handling make it the supermini with passion.",
    features: ["Spanish styling", "VW Group quality", "Dynamic handling", "Modern tech"],
    idealFor: "Young-at-heart drivers seeking excitement",
    comfort: "Sports-inspired seats and driver-focused cabin",
    usage: "Spirited daily driving and weekend adventures"
  },
  {
    id: "skoda-fabia",
    name: "Fabia",
    brand: "Škoda",
    category: "city",
    description: "The Škoda Fabia offers exceptional space and practicality. Czech clever thinking delivers more car for your money.",
    features: ["Best-in-class space", "Simply Clever features", "VW Group tech", "Practical design"],
    idealFor: "Practical-minded buyers seeking maximum value",
    comfort: "Surprisingly spacious with clever storage",
    usage: "Family-friendly compact motoring"
  },
  {
    id: "ford-fiesta",
    name: "Fiesta",
    brand: "Ford",
    category: "city",
    description: "The Ford Fiesta is the driver's choice in the supermini segment. Legendary handling and engaging dynamics make every journey an event.",
    features: ["Legendary handling", "EcoBoost engines", "SYNC connectivity", "Driver-focused"],
    idealFor: "Driving enthusiasts who value dynamics",
    comfort: "Supportive seats and engaging driving position",
    usage: "Fun daily driving and spirited B-roads"
  },
  {
    id: "nissan-micra",
    name: "Micra",
    brand: "Nissan",
    category: "city",
    description: "The Nissan Micra has been transformed into a stylish, premium supermini. Bold design and quality materials create a compelling package.",
    features: ["Bold design", "Bose audio option", "Japanese reliability", "Premium feel"],
    idealFor: "Those seeking Japanese quality with European style",
    comfort: "Well-insulated cabin with quality materials",
    usage: "Quality daily transport with style"
  },
  {
    id: "mazda-2",
    name: "Mazda2",
    brand: "Mazda",
    category: "city",
    description: "The Mazda2 embodies Kodo design philosophy in a compact package. Soul-stirring styling meets Mazda's engaging driving character.",
    features: ["Kodo design", "Skyactiv technology", "Premium feel", "Engaging drive"],
    idealFor: "Design-conscious drivers seeking refinement",
    comfort: "Premium interior with attention to detail",
    usage: "Refined daily driving with character"
  },
  {
    id: "honda-jazz",
    name: "Jazz",
    brand: "Honda",
    category: "city",
    description: "The Honda Jazz is the master of practicality. Magic Seats and ingenious packaging create unrivaled versatility in a compact form.",
    features: ["Magic Seats", "Hybrid efficiency", "Honda reliability", "Ingenious packaging"],
    idealFor: "Practical-minded buyers needing maximum flexibility",
    comfort: "Comfortable and remarkably spacious",
    usage: "Versatile family transport and practical lifestyle"
  },
  {
    id: "suzuki-swift",
    name: "Swift",
    brand: "Suzuki",
    category: "city",
    description: "The Suzuki Swift is the lightweight champion. Nimble handling and efficient mild-hybrid technology deliver driving purity.",
    features: ["Lightweight construction", "Mild hybrid", "Agile handling", "Affordable fun"],
    idealFor: "Enthusiasts seeking lightweight driving pleasure",
    comfort: "Sport-inspired interior with good support",
    usage: "Fun driving and efficient commuting"
  },
  {
    id: "chevrolet-spark",
    name: "Spark",
    brand: "Chevrolet",
    category: "city",
    description: "The Chevrolet Spark is the cheerful city companion. Compact dimensions and friendly character make urban driving stress-free.",
    features: ["Compact size", "Cheerful design", "Easy to park", "Affordable running"],
    idealFor: "First-time buyers and city dwellers",
    comfort: "Functional cabin with essential features",
    usage: "Essential city mobility and easy parking"
  },
  {
    id: "mitsubishi-mirage",
    name: "Mirage",
    brand: "Mitsubishi",
    category: "city",
    description: "The Mitsubishi Mirage focuses on what matters: efficiency and reliability. A no-nonsense approach to affordable motoring.",
    features: ["Exceptional economy", "Reliable mechanics", "Low insurance", "Simple maintenance"],
    idealFor: "Budget-focused drivers prioritizing running costs",
    comfort: "Practical and functional design",
    usage: "Economical daily transport"
  },
  // Sedans & Family Cars
  {
    id: "renault-megane",
    name: "Mégane",
    brand: "Renault",
    category: "sedan",
    description: "The Renault Mégane combines French sophistication with practical family credentials. Refined dynamics and generous equipment make it a compelling choice.",
    features: ["R.S. Line available", "Digital dashboard", "Hybrid option", "Generous equipment"],
    idealFor: "Families seeking French elegance and practicality",
    comfort: "Refined ride with supportive seating",
    usage: "Family transport and comfortable commuting"
  },
  {
    id: "peugeot-308",
    name: "308",
    brand: "Peugeot",
    category: "sedan",
    description: "The Peugeot 308 showcases French automotive artistry. The new i-Cockpit and stunning design create a premium compact experience.",
    features: ["New i-Cockpit", "PHEV option", "Premium design", "Advanced tech"],
    idealFor: "Style-conscious families and professionals",
    comfort: "Premium materials and excellent ergonomics",
    usage: "Premium daily driving and family journeys"
  },
  {
    id: "peugeot-508",
    name: "508",
    brand: "Peugeot",
    category: "sedan",
    description: "The Peugeot 508 is a statement of French luxury. Dramatic styling and refined dynamics challenge premium segment conventions.",
    features: ["Stunning design", "Night Vision option", "Plug-in hybrid", "Premium cabin"],
    idealFor: "Executive buyers seeking distinctive luxury",
    comfort: "Top-tier refinement and premium features",
    usage: "Executive transport and prestigious motoring"
  },
  {
    id: "volkswagen-passat",
    name: "Passat",
    brand: "Volkswagen",
    category: "sedan",
    description: "The Volkswagen Passat defines the business-class experience. Effortless refinement and advanced technology for discerning professionals.",
    features: ["Business-class comfort", "Travel Assist", "IQ.Light LED", "Premium audio"],
    idealFor: "Business professionals and frequent travelers",
    comfort: "Exceptional long-distance comfort",
    usage: "Executive travel and family holidays"
  },
  {
    id: "skoda-octavia",
    name: "Octavia",
    brand: "Škoda",
    category: "sedan",
    description: "The Škoda Octavia offers unbeatable value in the family segment. Exceptional space and VW Group quality at a sensible price.",
    features: ["Best-in-class space", "VW Group quality", "Estate option", "Value pricing"],
    idealFor: "Smart families seeking maximum practicality",
    comfort: "Roomy cabin with quality appointments",
    usage: "Family transport and practical living"
  },
  {
    id: "toyota-avensis",
    name: "Avensis",
    brand: "Toyota",
    category: "sedan",
    description: "The Toyota Avensis brings legendary reliability to the family sedan segment. A trusted companion for years of worry-free motoring.",
    features: ["Toyota reliability", "Safety technology", "Comfortable ride", "Low depreciation"],
    idealFor: "Reliability-focused families and professionals",
    comfort: "Refined and dependable comfort",
    usage: "Reliable family transport and commuting"
  },
  {
    id: "toyota-camry",
    name: "Camry",
    brand: "Toyota",
    category: "sedan",
    description: "The Toyota Camry represents the pinnacle of Toyota's sedan expertise. Proven hybrid technology and exceptional reliability.",
    features: ["Hybrid efficiency", "Premium cabin", "Toyota Safety Sense", "Proven reliability"],
    idealFor: "Discerning buyers seeking Toyota excellence",
    comfort: "First-class refinement and quiet operation",
    usage: "Premium family transport and executive travel"
  },
  {
    id: "hyundai-elantra",
    name: "Elantra",
    brand: "Hyundai",
    category: "sedan",
    description: "The Hyundai Elantra showcases bold Korean design. Striking aesthetics and comprehensive features redefine value in the sedan segment.",
    features: ["Striking design", "Digital cockpit", "5-year warranty", "Comprehensive equipment"],
    idealFor: "Design-forward families seeking modern style",
    comfort: "Well-appointed and technology-rich",
    usage: "Stylish family transport and professional use"
  },
  {
    id: "hyundai-accent",
    name: "Accent",
    brand: "Hyundai",
    category: "sedan",
    description: "The Hyundai Accent delivers sedan practicality with excellent value. A sensible choice backed by Hyundai's comprehensive warranty.",
    features: ["Value pricing", "5-year warranty", "Practical design", "Efficient engines"],
    idealFor: "Value-conscious families and professionals",
    comfort: "Comfortable and practical cabin",
    usage: "Daily commuting and family duties"
  },
  {
    id: "kia-cerato",
    name: "Cerato",
    brand: "Kia",
    category: "sedan",
    description: "The Kia Cerato combines dynamic styling with exceptional warranty coverage. A confident choice for the modern family.",
    features: ["Dynamic styling", "7-year warranty", "GT trim option", "Modern tech"],
    idealFor: "Families seeking style with long-term confidence",
    comfort: "Sporty yet comfortable ride",
    usage: "Dynamic family transport and spirited driving"
  },
  {
    id: "ford-focus",
    name: "Focus",
    brand: "Ford",
    category: "sedan",
    description: "The Ford Focus sets the dynamic standard in its class. Engaging driving experience meets family practicality.",
    features: ["Class-leading dynamics", "Co-Pilot360", "ST option", "Practical estate"],
    idealFor: "Driving enthusiasts with family responsibilities",
    comfort: "Supportive seats and engaging position",
    usage: "Enjoyable family driving and commuting"
  },
  {
    id: "ford-mondeo",
    name: "Mondeo",
    brand: "Ford",
    category: "sedan",
    description: "The Ford Mondeo delivers executive comfort with Ford's legendary driving dynamics. A refined cruiser for serious motorists.",
    features: ["Executive presence", "Hybrid option", "B&O audio", "Generous space"],
    idealFor: "Professionals seeking comfort and capability",
    comfort: "Long-distance comfort and refinement",
    usage: "Executive travel and family holidays"
  },
  {
    id: "nissan-sentra",
    name: "Sentra",
    brand: "Nissan",
    category: "sedan",
    description: "The Nissan Sentra offers Japanese reliability in an elegant sedan package. Thoughtful design and quality engineering for everyday excellence.",
    features: ["Japanese reliability", "Zero Gravity seats", "Nissan Safety Shield", "Elegant design"],
    idealFor: "Quality-focused families seeking reliability",
    comfort: "NASA-inspired Zero Gravity seating",
    usage: "Comfortable family transport and commuting"
  },
  {
    id: "mazda-3",
    name: "Mazda3",
    brand: "Mazda",
    category: "sedan",
    description: "The Mazda3 elevates the compact segment with premium aspirations. Kodo design and Skyactiv technology create automotive artistry.",
    features: ["Kodo design", "Skyactiv-X engine", "Premium interior", "Engaging drive"],
    idealFor: "Sophisticated drivers who appreciate craftsmanship",
    comfort: "Premium materials and refined acoustics",
    usage: "Refined daily driving with character"
  },
  {
    id: "honda-civic",
    name: "Civic",
    brand: "Honda",
    category: "sedan",
    description: "The Honda Civic combines Honda's engineering excellence with practical credentials. Efficient, reliable, and engaging to drive.",
    features: ["VTEC engine", "Honda Sensing", "Sporty styling", "Efficient hybrid"],
    idealFor: "Enthusiasts seeking reliability and engagement",
    comfort: "Well-engineered interior with quality materials",
    usage: "Engaging commuting and family practicality"
  },
  {
    id: "opel-insignia",
    name: "Insignia",
    brand: "Opel",
    category: "sedan",
    description: "The Opel Insignia brings German engineering to the executive segment. Refined comfort and advanced technology for discerning buyers.",
    features: ["IntelliLux LED", "Ergonomic seats", "German engineering", "Estate option"],
    idealFor: "Business travelers and comfort-focused families",
    comfort: "AGR-certified seats and refined ride",
    usage: "Executive travel and long-distance comfort"
  },
  {
    id: "citroen-c4",
    name: "C4",
    brand: "Citroën",
    category: "sedan",
    description: "The Citroën C4 reimagines the hatchback with elevated design. Unique styling and Advanced Comfort create a distinctive proposition.",
    features: ["Elevated design", "Advanced Comfort", "Electric option", "Unique styling"],
    idealFor: "Those seeking something different and comfortable",
    comfort: "Class-leading suspension comfort",
    usage: "Comfortable family transport with style"
  },
  // SUVs & Crossovers
  {
    id: "dacia-duster",
    name: "Duster",
    brand: "Dacia",
    category: "suv",
    description: "The Dacia Duster proves SUV capability doesn't require SUV pricing. Genuine off-road ability and rugged design at an exceptional value.",
    features: ["4x4 capability", "Rugged design", "Exceptional value", "High ground clearance"],
    idealFor: "Adventure seekers and value-conscious SUV buyers",
    comfort: "Practical and capable in all conditions",
    usage: "Urban driving, off-road adventures, and family trips"
  }
] as const;

// Generate random but consistent data for each car
const generateCarData = (car: CarData, index: number): Car => {
  const basePrice = car.category === 'suv' ? 180000 : car.category === 'sedan' ? 150000 : 80000;
  const priceVariation = (index * 7919) % 50000;
  
  const years = [2019, 2020, 2021, 2022, 2023];
  const yearIndex = (index * 3) % years.length;
  
  const mileageBase = car.category === 'city' ? 30000 : 50000;
  const mileageVariation = ((index * 1337) % 40000);
  
  const fuels = ['Essence', 'Diesel', 'Hybride'];
  const fuelIndex = index % fuels.length;
  
  const transmissions = ['Manuelle', 'Automatique'];
  const transIndex = (index * 2) % transmissions.length;

  // Get image - use specific image if available, otherwise use category default
  const image = carImageMap[car.id] || categoryDefaultImages[car.category] || cityClio;

  return {
    ...car,
    image,
    price: basePrice + priceVariation,
    year: years[yearIndex],
    mileage: mileageBase + mileageVariation,
    fuel: fuels[fuelIndex],
    transmission: transmissions[transIndex],
  };
};

export const cars: Car[] = carData.map((car, index) => generateCarData(car, index));

export const getCityCards = () => cars.filter(car => car.category === 'city');
export const getSedans = () => cars.filter(car => car.category === 'sedan');
export const getSuvs = () => cars.filter(car => car.category === 'suv');
export const getCarById = (id: string) => cars.find(car => car.id === id);
