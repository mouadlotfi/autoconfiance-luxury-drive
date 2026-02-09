
export interface Category {
    id: string;
    name: string;
    created_at?: string;
}

export interface Car {
    id: string;
    name: string;      // "Brand Model"
    category_id: string;
    image_url: string;
    kilometrage?: number;     // Mileage in km
    transmission?: string;    // Manual, Automatic, etc.
    annee?: number;           // Year
    carburant?: string;       // Fuel type (Essence, Diesel, etc.)
    created_at?: string;
    // Optional join field
    categories?: Category;
}
