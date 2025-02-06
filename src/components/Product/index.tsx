import {View, Text, Image} from 'react-native';
import React from 'react';

interface ProductCard {
  title: string;
  price: string;
  thumbnail: string;
}

export const ProductCard = ({title, price, thumbnail}: ProductCard) => {
  return (
    <View
      style={{
        width: '100%',
        gap: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Image src={thumbnail} style={{width: 100, height: 100}} />
      <View style={{justifyContent: 'center', width: '40%'}}>
        <Text numberOfLines={2}>{title}</Text>
        <Text numberOfLines={1}>{price}</Text>
      </View>
      <View style={{justifyContent: 'center'}}>
        <Text numberOfLines={1}>Details</Text>
      </View>
    </View>
  );
};
