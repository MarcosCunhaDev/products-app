import React from 'react';
import {FlatList, View} from 'react-native';
import {ProductI} from '../../services/api';
import {ProductCard} from '../Product';

export interface ProductsListI {
  data?: ProductI[];
}

export const ProductsList = ({data}: ProductsListI) => {
  return (
    <FlatList
      horizontal={false}
      data={data}
      renderItem={({item}) => <ProductCard {...item} />}
      keyExtractor={item => String(item.id)}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      showsVerticalScrollIndicator
    />
  );
};
