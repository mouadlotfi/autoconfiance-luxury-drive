
import { supabase } from './client';
import { Car, Category } from './types';

// 1. getCars(): Fetch all cars joined with their category names.
export const getCars = async (): Promise<Car[]> => {
    const { data, error } = await supabase
        .from('cars')
        .select(`
      *,
      categories (
        id,
        name
      )
    `)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching cars:', error);
        throw error;
    }
    return data as Car[];
};

// 2. getCategories(): Helper to fetch categories for the dropdown
export const getCategories = async (): Promise<Category[]> => {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

    if (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
    return data as Category[];
};

// 3. addCategory(name): Insert a new category.
export const addCategory = async (name: string): Promise<Category | null> => {
    const { data, error } = await supabase
        .from('categories')
        .insert([{ name }])
        .select()
        .single();

    if (error) {
        console.error('Error adding category:', error);
        throw error;
    }
    return data;
};

// 4. addCar: Insert a new car with all details
export const addCar = async (
    name: string,
    category_id: string,
    image_url: string,
    kilometrage?: number,
    transmission?: string,
    annee?: number,
    carburant?: string
): Promise<Car | null> => {
    const { data, error } = await supabase
        .from('cars')
        .insert([{
            name,
            category_id,
            image_url,
            kilometrage,
            transmission,
            annee,
            carburant
        }])
        .select()
        .single();

    if (error) {
        console.error('Error adding car:', error);
        throw error;
    }
    return data;
};

// 5. deleteCar(id): Remove a car from the database by its ID.
export const deleteCar = async (id: string): Promise<void> => {
    const { error } = await supabase
        .from('cars')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting car:', error);
        throw error;
    }
};
