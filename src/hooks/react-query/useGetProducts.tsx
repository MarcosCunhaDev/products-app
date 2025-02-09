import {fetchProducts, ProductsResponseI} from '@services/api';
import {useInfiniteQuery} from '@tanstack/react-query';

export interface ProductI {
  title: string;
  price: string;
  thumbnail: string;
}

export const useGetProducts = () => {
  const query = useInfiniteQuery<ProductsResponseI, Error>({
    queryKey: ['useGetProducts'],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage, allPages) => {
      const totalProducts = lastPage.total;
      const loadedProducts = allPages.length * 10;
      return loadedProducts < totalProducts ? allPages.length + 1 : undefined;
    },
  });

  return {
    ...query,
  };
};
