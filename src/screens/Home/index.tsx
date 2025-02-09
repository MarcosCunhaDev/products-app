import CategoriesFilter from '@components/CategoriesFilter/CategoriesFilter';
import {ProductsList} from '@components/ProductsList';
import {
  ProductsSorter,
  criteriaT,
  orderT,
} from '@components/ProductsSorter/ProductsSorter';
import ScreenContainer from '@components/ScreenContainer';
import {useGetProducts} from '@hooks/react-query/useGetProducts';
import {sortByCriteriaAndOrder} from '@utils/helpers';
import React, {useMemo, useState} from 'react';

interface OrderI {
  criteria: criteriaT;
  order: orderT;
}

const Home = () => {
  const {data, isLoading} = useGetProducts();
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [selectedOrder, setSelectedOrder] = useState<OrderI | null>(null);

  const products = data?.pages.flatMap(page => page.products) || [];

  const handleSort = (criteria: criteriaT | null, order: orderT | null) => {
    if (criteria && order) {
      setSelectedOrder({criteria, order});
    } else {
      setSelectedOrder(null);
    }
  };

  const handleSelectFilter = (category: string) => {
    setSelectedFilter(category);
  };
  const handleUnselectFilter = () => {
    setSelectedFilter('');
  };

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedFilter) {
      filtered = filtered.filter(
        product => product.category === selectedFilter,
      );
    } else {
      filtered = [...products];
    }

    if (selectedOrder?.criteria && selectedOrder?.order) {
      return sortByCriteriaAndOrder(
        filtered,
        selectedOrder?.criteria,
        selectedOrder?.order,
      );
    } else {
      return [...filtered];
    }
  }, [products, selectedFilter, selectedOrder?.criteria, selectedOrder?.order]);

  return (
    <ScreenContainer>
      <CategoriesFilter
        selectedFilter={selectedFilter}
        onFilter={handleSelectFilter}
        onRemoveFilter={handleUnselectFilter}
      />
      <ProductsSorter onSort={handleSort} isLoading={isLoading} />
      <ProductsList data={filteredAndSortedProducts} />
    </ScreenContainer>
  );
};

export default Home;
