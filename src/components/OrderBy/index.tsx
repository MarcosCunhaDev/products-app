import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {ProductCard} from '../Product';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Essence Mascara Lash Princess',
    price: '9.99',
    thumbnail: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    price: 'First Item',
    thumbnail: 'First Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    price: 'First Item',
    thumbnail: 'First Item',
  },
];

const index = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <ProductCard {...item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default index;
