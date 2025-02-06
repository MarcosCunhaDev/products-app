import React from 'react';
import {FlatList, View} from 'react-native';
import {ProductCard} from '../Product';

export const ProductsList = ({data}: any) => {
  return (
    <FlatList
      horizontal={false}
      data={data}
      renderItem={({item}) => <ProductCard {...item} />}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator
    />
  );
};
