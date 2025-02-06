import {View, Text} from 'react-native';
import React from 'react';

interface ProductCard {
  title: string;
  price: string;
  thumbnail: string;
}

export const ProductCard = ({title, price, thumbnail}: ProductCard) => {
  return (
    <View style={{width: '100%', height: 50, gap: 10, borderRadius: 10}}>
      <Text numberOfLines={1}>{title}</Text>
      <Text numberOfLines={1}>{price}</Text>
      <Text>{thumbnail}</Text>
    </View>
  );
};
