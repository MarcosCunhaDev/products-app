import { fetchProducts, ProductI } from '@services/api';

export type RootStackParamList = {
    home: undefined;
    details: ProductI;
};