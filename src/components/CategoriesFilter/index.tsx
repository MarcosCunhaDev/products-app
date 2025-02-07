import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import React, {useRef, useState} from 'react';
import {useCategories} from '../../hooks/react-query/useGetCategories';
import {CategoriesLoader} from './CategoriesLoader';
import {CategoryItem} from './CategoryItem';

export interface CategoriesFilterI {
  selectedFilter: string;
  setSelectedFilter: (category: string) => void;
}

const CategoriesFilter = ({
  selectedFilter,
  setSelectedFilter,
}: CategoriesFilterI) => {
  const {data, isFetching, isError} = useCategories();
  const scrollViewRef = useRef(null);

  // TODO: Finish this feature
  // const onPressTouch = () => {
  //   console.log('chamou onPressTouch');
  //   if (scrollViewRef.current) {
  //     scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  //   }
  // };

  if (isError) null;

  if (isFetching) {
    return <CategoriesLoader />;
  }
  const handleSelectFilter = (category: string) => {
    setSelectedFilter(category);
  };
  const handleUnselectFilter = () => {
    setSelectedFilter('');
    // onPressTouch();
  };

  return (
    <ScrollView
      horizontal
      style={{
        marginBottom: 10,
        marginTop: 10,
        flexGrow: 0,
      }}
      contentContainerStyle={{
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 20,
      }}
      ref={scrollViewRef}>
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
        }}>
        {selectedFilter ? (
          <>
            <CategoryItem
              name={selectedFilter}
              isSelected={true}
              handlePressFilter={handleUnselectFilter}
            />
          </>
        ) : (
          data?.map(item => (
            <CategoryItem
              key={item}
              name={item}
              isSelected={item.includes(selectedFilter)}
              handlePressFilter={() => handleSelectFilter(item)}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default CategoriesFilter;
