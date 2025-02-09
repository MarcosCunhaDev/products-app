import {criteriaT, orderT} from '@components/ProductsSorter/ProductsSorter';
import {ProductI} from '@services/api';

export const filterByCategory = (
  currentCategory: string,
  products?: ProductI[],
): ProductI[] => {
  if (products?.length) {
    return products?.filter(
      (product, index) => product.category === currentCategory,
    );
  }
  return [];
};

export const sortByCriteriaAndOrder = (
  products: ProductI[] | [],
  criteria: criteriaT,
  order: orderT,
): ProductI[] | [] => {
  return [...products].sort((a, b) => {
    if (order === 'asc') {
      return a[criteria] - b[criteria];
    } else {
      return b[criteria] - a[criteria];
    }
  });
};
