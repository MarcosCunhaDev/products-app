import {useQuery} from '@tanstack/react-query';
import {fetchProducts, ProductsResponseI} from '@services/api';

export interface ProductI {
  title: string;
  price: string;
  thumbnail: string;
}

export const useGetProducts = () => {
  const query = useQuery<ProductsResponseI, Error>({
    queryKey: ['useGetProducts'],
    queryFn: fetchProducts,
  });

  return {
    ...query,
  };
};
