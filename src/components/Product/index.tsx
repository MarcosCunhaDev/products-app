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
import {Tag} from '@components/Tag/Tag';
import Icon from 'react-native-vector-icons/Feather';
import {getRatingStars} from '@utils/helpers';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'home'
>;

export const ProductCard = ({...props}: ProductI) => {
  const {title, price, thumbnail, category, rating} = {...props};
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleGoToDetails = () => {
    navigation.navigate('details', {...props});
  };

  return (
    <TouchableOpacity onPress={handleGoToDetails}>
      <Container>
        <Tag text={category} />
        <ContainerImg>
          <Image src={thumbnail} style={{width: 120, height: 120}} />
        </ContainerImg>
        <ContainerTxt>
          <ContainerMainTxt>
            <Text numberOfLines={2}>{title}</Text>
            <Text numberOfLines={1}>{getRatingStars(rating)}</Text>
            <Text numberOfLines={1} style={{fontWeight: 700}}>
              $ {price}
            </Text>
          </ContainerMainTxt>
          <ContainerDetails>
            <Text numberOfLines={1}>Details</Text>
            <Icon name="chevron-right" color={'#000'} size={20} />
          </ContainerDetails>
        </ContainerTxt>
      </Container>
    </TouchableOpacity>
  );
};
