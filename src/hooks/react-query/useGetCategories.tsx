import {useQuery} from '@tanstack/react-query';
import {CategoriesResponse, fetchCategories} from '../../services/api';

export interface ProductI {
  title: string;
  price: string;
  thumbnail: string;
}

export const useCategories = () => {
  const query = useQuery<string[], Error>({
    queryKey: ['useCategories'],
    queryFn: fetchCategories,
  });

  return {
    ...query,
  };
};
