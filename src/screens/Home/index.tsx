import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useGetProducts} from '../../hooks/react-query/useGetProducts';
import {ProductsList} from '../../components/ProductsList';
import {Loader} from '../../components/Loader';
import CategoriesFilter from '../../components/CategoriesFilter';

const Home = () => {
  const navigation = useNavigation();
  const {data, isLoading} = useGetProducts();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
      <CategoriesFilter />
      <ProductsList data={data?.products} />
    </View>
  );
};

export default Home;
