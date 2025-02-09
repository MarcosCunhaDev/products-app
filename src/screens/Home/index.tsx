import CategoriesFilter from '@components/CategoriesFilter/CategoriesFilter';
import {ProductsList} from '@components/ProductsList';
import ScreenContainer from '@components/ScreenContainer';
import {useGetProducts} from '@hooks/react-query/useGetProducts';
import {ProductI} from '@services/api';
import React, {useEffect, useState} from 'react';
import {
  ProductsSorter,
  criteriaT,
  orderT,
} from '@components/ProductsSorter/ProductsSorter';

const filterByCategory = (
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

interface OrderI {
  criteria: criteriaT;
  order: orderT;
}

const sortByCriteriaAndOrder = (
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

const Home = () => {
  const {data, isFetching, isLoading} = useGetProducts();
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<ProductI[] | []>([]);
  const [sortedProducts, setSortedProducts] = useState<ProductI[] | []>([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderI | null>(null);

  // update filtered products
  useEffect(() => {
    if (selectedFilter) {
      setFilteredProducts(filterByCategory(selectedFilter, data?.products));
    } else {
      setFilteredProducts(data?.products ?? []);
    }
  }, [selectedFilter, data?.products]);

  // update sorted products
  useEffect(() => {
    if (selectedOrder?.criteria && selectedOrder?.order) {
      const sorted = sortByCriteriaAndOrder(
        filteredProducts,
        selectedOrder?.criteria,
        selectedOrder?.order,
      );
      setSortedProducts(sorted);
    } else {
      setSortedProducts([...filteredProducts]);
    }
  }, [filteredProducts, selectedOrder?.criteria, selectedOrder?.order]);

  const handleSort = (criteria: criteriaT | null, order: orderT | null) => {
    if (criteria && order) {
      setSelectedOrder({criteria, order});
    } else {
      setSelectedOrder(null);
    }
  };

  return (
    <ScreenContainer>
      <CategoriesFilter
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      <ProductsSorter onSort={handleSort} isLoading={isLoading} />
      <ProductsList data={sortedProducts} isLoading={isFetching} />
    </ScreenContainer>
  );
};

export default Home;
