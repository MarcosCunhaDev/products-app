import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Container} from './Button.styles';

export interface ButtonI {
  onPress: () => void;
  disabled?: boolean;
  title: string;
}

const Button = ({onPress, disabled, title}: ButtonI) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Container>
        <Icon name="calendar" color={'#FFF'} size={20} />
        <Text style={{color: 'white', fontWeight: 600}}>{title}</Text>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
