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
  const {data, isFetching} = useGetProducts();
  const [selectedFilter, setSelectedFilter] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<
    ProductI[] | undefined
  >(data?.products);

  useEffect(() => {
    console.log('console 1');
    if (selectedFilter) {
      console.log('console 2');
      setFilteredProducts(filterByCategory(selectedFilter, data?.products));
    } else {
      console.log('console 3');
      setFilteredProducts(data?.products);
    }
  }, [selectedFilter]);

  if (isFetching) {
    return <Loader />;
  }
  return (
    <ScreenContainer keyboardAvoiding>
      <CategoriesFilter
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      <ProductsList data={filteredProducts} />
    </ScreenContainer>
  );
};

export default Home;
