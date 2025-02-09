import {ProductReminder} from '@components/ProductReminder';
import ScreenContainer from '@components/ScreenContainer';
import {RootStackParamList} from '@navigation/types';
import {RouteProp, useRoute} from '@react-navigation/native';
import {formatToDollars} from '@utils/helpers';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {ContainerContent, ContainerImg} from './ProductDetails.styles';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'details'>;

const ProductDetails = () => {
  const route = useRoute<DetailsScreenRouteProp>();
  const {title, price, description, brand, stock, thumbnail} = route.params;

  return (
    <ScreenContainer>
      <View style={{backgroundColor: 'white', flex: 1, padding: 20}}>
        <ContainerImg>
          <Image src={thumbnail} style={{width: 350, height: 300}} />
        </ContainerImg>
        <ContainerContent>
          <Text style={{fontSize: 20, fontWeight: 600}}>{title}</Text>
          <Text style={{fontSize: 20, color: 'orange'}}>
            {formatToDollars(price)}
          </Text>
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
        </ContainerContent>
        <ProductReminder productName={title} />
      </View>
    </ScreenContainer>
  );
};

export default ProductDetails;
