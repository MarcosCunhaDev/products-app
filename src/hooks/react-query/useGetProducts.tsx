import {useQuery} from '@tanstack/react-query';
import {fetchProducts, ProductsResponse} from '../../services/api';

export interface ProductI {
  title: string;
  price: string;
  thumbnail: string;
}

// const formatData = (response: any[]): ProductI[] => {
//   return response?.map(item => {
//     return {title: item.title, price: item.price, thumbnail: item.thumbnail};
//   });
// };

export const useGetProducts = () => {
  const query = useQuery<ProductsResponse, Error>({
    queryKey: ['useGetProducts'],
    queryFn: fetchProducts,
  });

  return {
    ...query,
  };
};
