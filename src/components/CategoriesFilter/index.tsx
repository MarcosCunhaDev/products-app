import {View, Text, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {ProductCard} from '../Product';

interface CategoriesFilterI {
  filters: string[];
  handleClickFilter: () => void;
}

const CategoriesFilter = ({filters, handleClickFilter}: CategoriesFilterI) => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <ScrollView>
      <View style={{flexDirection: 'row'}}>
        {selectedFilter ? (
          <Text>{selectedFilter}</Text>
        ) : (
          filters.map(item => <Text>{item}</Text>)
        )}
      </View>
    </ScrollView>
  );
};

export default CategoriesFilter;
