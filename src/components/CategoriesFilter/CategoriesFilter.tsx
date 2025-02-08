import React, {useRef} from 'react';
import {ScrollView, View} from 'react-native';
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

  if (isError) null;

  if (isFetching) {
    return <CategoriesLoader />;
  }
  const handleSelectFilter = (category: string) => {
    setSelectedFilter(category);
  };
  const handleUnselectFilter = () => {
    setSelectedFilter('');
  };

  return selectedFilter ? (
    <View
      style={{
        flexDirection: 'row',
        gap: 15,
        marginBottom: 10,
        marginTop: 10,
        flexGrow: 0,
        width: '100%',
        paddingLeft: 10,
        paddingVertical: 10,
      }}>
      <CategoryItem
        name={selectedFilter}
        handlePressFilter={handleUnselectFilter}
      />
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
        paddingLeft: 10,
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
            handlePressFilter={() => handleSelectFilter(item)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoriesFilter;
