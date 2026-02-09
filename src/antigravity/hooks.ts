
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getCars, addCar, deleteCar, getCategories, addCategory } from './controller';
import { Car, Category } from './types';

// Key for caching
export const CARS_QUERY_KEY = ['cars'];
export const CATEGORIES_QUERY_KEY = ['categories'];

// 1. Hook to fetch cars (Global Sync)
export const useCars = () => {
    return useQuery({
        queryKey: CARS_QUERY_KEY,
        queryFn: getCars,
    });
};

export const useCategories = () => {
    return useQuery({
        queryKey: CATEGORIES_QUERY_KEY,
        queryFn: getCategories,
    });
};

// 2. Hook to add a car
export const useAddCar = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({
            name,
            category_id,
            image_url,
            kilometrage,
            transmission,
            annee,
            carburant
        }: {
            name: string;
            category_id: string;
            image_url: string;
            kilometrage?: number;
            transmission?: string;
            annee?: number;
            carburant?: string;
        }) =>
            addCar(name, category_id, image_url, kilometrage, transmission, annee, carburant),
        onSuccess: () => {
            // Invalidate cache to trigger re-fetch (Global Sync)
            queryClient.invalidateQueries({ queryKey: CARS_QUERY_KEY });
        },
    });
};

// 3. Hook to delete a car
export const useDeleteCar = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteCar(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: CARS_QUERY_KEY });
        },
    });
};

// 4. Hook to add a category
export const useAddCategory = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (name: string) => addCategory(name),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: CATEGORIES_QUERY_KEY });
        },
    });
};
