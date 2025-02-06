import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useGetProducts} from '../../hooks/react-query/useGetProducts';
import {ProductsList} from '../../components/ProductsList';




const Home = () => {
  const navigation = useNavigation();
  const {data} = useGetProducts();

  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
      <ProductsList data={data} />
    </View>
  );
};

export default Home;
