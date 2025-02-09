import React, {useRef} from 'react';
import {ScrollView, TouchableWithoutFeedback, View, Text} from 'react-native';
import {useCategories} from '@hooks/react-query/useGetCategories';
import {CategoriesLoader} from './CategoriesLoader';
import {CategoryItem} from './CategoryItem';
import Icon from 'react-native-vector-icons/Feather';

export interface CategoriesFilterI {
  selectedFilter: string;
  onFilter: (category: string) => void;
  onRemoveFilter: () => void;
}

const CategoriesFilter = ({
  selectedFilter,
  onFilter,
  onRemoveFilter,
}: CategoriesFilterI) => {
  const {data, isLoading, isError} = useCategories();
  const scrollViewRef = useRef(null);

  if (isError) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Error: {error?.message}</Text>
      </View>
    );
  }

  if (isLoading) {
    return <CategoriesLoader />;
  }

  return selectedFilter ? (
    <View
      style={{
        flexDirection: 'row',
        gap: 15,
        marginBottom: 10,
        marginTop: 10,
        flexGrow: 0,
        width: '100%',
        paddingLeft: 20,
        paddingVertical: 10,
        alignItems: 'center',
      }}>
      <TouchableWithoutFeedback onPress={onRemoveFilter}>
        <Icon name="x-circle" size={30} color="black" />
      </TouchableWithoutFeedback>
      <CategoryItem name={selectedFilter} handlePressFilter={onRemoveFilter} />
    </View>
  ) : (
    <ScrollView
      horizontal
      style={{
        marginBottom: 10,
        marginTop: 10,
        flexGrow: 0,
      }}
      contentContainerStyle={{
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 20,
      }}
      ref={scrollViewRef}>
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
        }}>
        {data?.map(item => (
          <CategoryItem
            key={item}
            name={item}
            handlePressFilter={() => onFilter(item)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoriesFilter;
