import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ProductI} from '../../services/api';
import {ProductCard} from '../Product';
import {useGetProducts} from '../../hooks/react-query/useGetProducts';
import {ProductsLoader} from './ProductsLoader';
import {Loader} from '../Loader';
import {EmptyState} from './EmptyState';


export interface ProductsListI {
  data?: ProductI[];
  isLoading: boolean;
}

export const ProductsList = ({data, isLoading}: ProductsListI) => {
  // const {isFetching} = useGetProducts();

  if (isLoading) {
    return <ProductsLoader />;
  }


  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{flexGrow: 1, padding: 16}}
        horizontal={false}
        data={data}
        ListEmptyComponent={() => <EmptyState />}
        renderItem={({item}) => <ProductCard {...item} />}
        keyExtractor={item => String(item.id)}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        showsVerticalScrollIndicator
      />
    </View>
  );
};
