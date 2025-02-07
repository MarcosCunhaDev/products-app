import {View, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import React, {useRef, useState} from 'react';
import {useCategories} from '../../hooks/react-query/useGetCategories';

export interface CategoriesFilterI {
  selectedFilter: string;
  setSelectedFilter: (category: string) => void;
}

export interface CategoryItemI {
  handlePressFilter?: () => void;
  isSelected: boolean;
  name: string;
}

const CategoryItem = ({name, isSelected, handlePressFilter}: CategoryItemI) => {
  return (
    <TouchableWithoutFeedback onPress={handlePressFilter}>
      <View
        key={name}
        style={{
          borderRadius: 8,
          backgroundColor: 'tomato',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderColor: isSelected ? 'white' : undefined,
          borderWidth: isSelected ? 1 : 0,
        }}>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'white',
            textTransform: 'capitalize',
          }}>
          {name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

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

  if (isFetching) null;

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
        // borderWidth: 1,
        marginBottom: 20,
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
