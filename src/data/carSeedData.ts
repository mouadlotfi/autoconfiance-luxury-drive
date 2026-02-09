// This file has been emptied - all car data now comes from Supabase
// Cars are managed through the Admin panel only

export interface CarSeed {
    name: string;
    category: 'city' | 'sedan' | 'suv' | 'utility';
    image: string;
}

// Empty array - no hardcoded cars
export const carSeedData: CarSeed[] = [];
