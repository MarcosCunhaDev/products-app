import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
    const response = await axios.get(API_URL);
    return response.data.products;
};

export const fetchCategories = async () => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data.products;
};

// export const fetchProductsByCategory = async (category: string) => {
//     const response = await axios.get(`${API_URL}/category/${category}`);
//     return response.data.products;
// };