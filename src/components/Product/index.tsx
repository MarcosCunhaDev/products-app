import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {ProductI} from '@services/api';
import {
  Container,
  ContainerDetails,
  ContainerImg,
  ContainerMainTxt,
  ContainerTxt,
} from './styles';

export const ProductCard = ({...props}: ProductI) => {
  const {title, price, thumbnail} = {...props};
  const navigation = useNavigation();

  const handleGoToDetails = () => {
    // TODO: FIX tsc
    navigation.navigate('ProductDetails', {...props});
  };

  return (
    <TouchableOpacity onPress={handleGoToDetails}>
      <Container>
        <ContainerImg>
          <Image src={thumbnail} style={{width: 120, height: 120}} />
        </ContainerImg>
        <ContainerTxt>
          <ContainerMainTxt>
            <Text numberOfLines={2}>{title}</Text>
            <Text numberOfLines={1} style={{fontWeight: 700}}>
              $ {price}
            </Text>
          </ContainerMainTxt>
          <ContainerDetails>
            <Text numberOfLines={1}>Details</Text>
          </ContainerDetails>
        </ContainerTxt>
      </Container>
    </TouchableOpacity>
  );
};
