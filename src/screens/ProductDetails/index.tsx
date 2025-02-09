import Button from '@components/Button/Button';
import {ProductReminder} from '@components/ProductReminder';
import ScreenContainer from '@components/ScreenContainer';
import {RootStackParamList} from '@navigation/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

const ProductDetails = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const {title, price, description, brand, stock, thumbnail} = route.params;

  return (
    <ScreenContainer>
      <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
        <View
          style={{
            width: '100%',
            height: 300,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image src={thumbnail} style={{width: 350, height: 300}} />
        </View>
        <View style={{marginTop: 20, gap: 10}}>
          <Text style={{fontSize: 20, fontWeight: 600}}>{title}</Text>
          <Text style={{fontSize: 20, color: 'orange'}}>{price}</Text>
          <Text style={{fontSize: 16, textAlign: 'justify'}}>
            {description}
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Brand:</Text>
            {brand}
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Quantity:</Text> {stock}
          </Text>
        </View>
        <ProductReminder productName={title} />
      </View>
    </ScreenContainer>
  );
};

export default ProductDetails;
