import {RootStackParamList} from '@navigation/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ProductI} from '@services/api';
import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {
  Container,
  ContainerDetails,
  ContainerImg,
  ContainerMainTxt,
  ContainerTxt,
} from './styles';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export const ProductCard = ({...props}: ProductI) => {
  const {title, price, thumbnail} = {...props};
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleGoToDetails = () => {
    navigation.navigate('Details', {...props});
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
