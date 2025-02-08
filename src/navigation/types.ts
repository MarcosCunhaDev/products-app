import { fetchProducts, ProductI } from '@services/api';

export type RootStackParamList = {
    Home: undefined; // No parameters expected for the Home screen
    Details: ProductI; // Profile screen expects a `userId` parameter
};