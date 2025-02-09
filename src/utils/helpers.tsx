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

export const getRatingStars = (rating: number) => {
  const clampedRating = Math.min(Math.max(rating, 0), 5);

  const fullStars = Math.floor(clampedRating);
  const halfStar = clampedRating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const stars =
    '★'.repeat(fullStars) + (halfStar ? '½' : '') + '☆'.repeat(emptyStars);

  return stars;
};
