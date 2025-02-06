import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useCategories} from '../../hooks/react-query/useGetCategories';

interface CategoriesFilterI {
  handleClickFilter?: () => void;
}

const CategoryItem = ({name}: {name: string}) => {
  return (
    <View
      key={name}
      style={{
        borderRadius: 8,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
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
  );
};

const CategoriesFilter = ({handleClickFilter}: CategoriesFilterI) => {
  const {data, isFetching, isError} = useCategories();
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  if (isError) null;

  if (isFetching) null;

  // if (isFetching) null;

  return (
    <ScrollView horizontal style={{}}>
      <View
        style={{
          flexDirection: 'row',
          gap: 15,
          marginBottom: 40,
          marginTop: 10,
          // padding: 10,
          height: 50,
        }}>
        {selectedFilter ? (
          <CategoryItem name={selectedFilter} />
        ) : (
          data?.map(item => <CategoryItem name={item} />)
        )}
      </View>
    </ScrollView>
  );
};

export default CategoriesFilter;
