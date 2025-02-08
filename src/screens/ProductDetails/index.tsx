import {View, Text, Image} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {fetchProducts, ProductI} from '../../services/api';
import {ProductReminder} from '../../components/ProductReminder';

const ProductDetails = () => {
  const route = useRoute();
  const {title, price, description, brand, stock, thumbnail} =
    route.params as ProductI;

  return (
    <View style={{backgroundColor: 'white', flex: 1, padding: 10}}>
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
        <Text style={{fontSize: 16, textAlign: 'justify'}}>{description}</Text>
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
  );
};

export default ProductDetails;
