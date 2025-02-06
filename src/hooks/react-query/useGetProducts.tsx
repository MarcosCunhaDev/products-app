import {useQuery} from '@tanstack/react-query';
import {fetchProducts} from '../../services/api';

export interface ProductI {
  title: string;
  price: string;
  thumbnail: string;
}

const formatData = (response: any[]): ProductI[] => {
  return response?.map(item => {
    return {title: item.title, price: item.price, thumbnail: item.thumbnail};
  });
};

export const useGetProducts = () => {
  const query = useQuery({
    queryKey: ['useGetProducts'],
    queryFn: fetchProducts,
  });

  const formattedData = formatData(query.data);

  return {
    ...query,
    data: formattedData,
  };
};
