import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {ProductI} from '@services/api';
import {ProductCard} from '../Product';
import {useGetProducts} from '@hooks/react-query/useGetProducts';
import {ProductsLoader} from './ProductsLoader';
import {EmptyState} from './EmptyState';

export interface ProductsListI {
  data?: ProductI[];
}

export const ProductsList = ({data}: ProductsListI) => {
  const {fetchNextPage, hasNextPage, isFetchingNextPage, isLoading} =
    useGetProducts();

  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

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
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
            <ActivityIndicator color={'tomato'} size="small" />
          ) : null
        }
      />
    </View>
  );
};
