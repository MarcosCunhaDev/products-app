import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useGetProducts} from '../../hooks/react-query/useGetProducts';
import {ProductsList} from '../../components/ProductsList';
import {Loader} from '../../components/Loader';
import CategoriesFilter from '../../components/CategoriesFilter';
import {ProductI} from '../../services/api';
import ScreenContainer from '../../components/ScreenContainer';

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

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<
    ProductI[] | undefined
  >();
  const {data, isFetching} = useGetProducts();

  useEffect(() => {
    if (selectedFilter) {
      setFilteredProducts(filterByCategory(selectedFilter, data?.products));
    } else {
      setFilteredProducts(data?.products);
    }
  }, [selectedFilter, data?.products]);

  return (
    <ScreenContainer keyboardAvoiding>
      <CategoriesFilter
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      <ProductsList data={filteredProducts} isLoading={isFetching} />
    </ScreenContainer>
  );
};

export default Home;
