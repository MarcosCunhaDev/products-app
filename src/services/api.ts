import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
    description: string;
    brand: string;
    stock: number;
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export interface CategoriesResponse {
    data: string[]
}

export const fetchProducts = async (): Promise<ProductsResponse> => {
    const response = await axios.get<ProductsResponse>(API_URL);
    return response.data;
};

export const fetchCategories = async (): Promise<string[]> => {
    const response = await axios.get<string[]>(`${API_URL}/category-list`);
    return response.data;
};
