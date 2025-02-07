import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {fetchProducts, ProductsResponseI, ProductI} from '../../services/api';
import {useNavigation} from '@react-navigation/native';

export const ProductCard = ({...props}: ProductI) => {
  const {title, price, thumbnail} = {...props};
  const navigation = useNavigation();

  const handleGoToDetails = () => {
    // TODO: FIX tsc
    navigation.navigate('ProductDetails', {...props});
  };

  return (
    <TouchableOpacity onPress={handleGoToDetails}>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          gap: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: 'gray',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            overflow: 'hidden',
            width: 120,
            height: 120,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}>
          <Image src={thumbnail} style={{width: 120, height: 120}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              width: '70%',

              gap: 10,
              padding: 5,
            }}>
            <Text numberOfLines={2}>{title}</Text>
            <Text numberOfLines={1} style={{fontWeight: 700}}>
              $ {price}
            </Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text numberOfLines={1}>Details</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
