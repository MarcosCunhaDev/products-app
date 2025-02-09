import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export interface ProductI {
    id: number;
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
    description: string;
    brand: string;
    stock: number;
    category: string;
}

export interface ProductsResponseI {
    products: ProductI[];
    total: number;
    skip: number;
    limit: number;
}

export interface CategoriesResponse {
    data: string[]
}

export const fetchProducts = async ({ pageParam = 1 }): Promise<ProductsResponseI> => {
    const limit = 10;
    const response = await axios.get<ProductsResponseI>(`${API_URL}?limit=${limit}&skip=${(pageParam - 1) * 10}`);
    return response.data;
};

export const fetchCategories = async (): Promise<string[]> => {
    const response = await axios.get<string[]>(`${API_URL}/category-list`);
    return response.data;
};
