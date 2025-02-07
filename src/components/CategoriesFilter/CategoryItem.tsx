import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export interface CategoryItemI {
  handlePressFilter?: () => void;
  isSelected: boolean;
  name: string;
}
export const CategoryItem = ({
  name,
  isSelected,
  handlePressFilter,
}: CategoryItemI) => {
  return (
    <TouchableWithoutFeedback onPress={handlePressFilter}>
      <View
        key={name}
        style={{
          borderRadius: 8,
          backgroundColor: 'tomato',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          paddingHorizontal: 5,
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
