import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {Container, Title} from './CategoryItem.styles';

export interface CategoryItemI {
  handlePressFilter?: () => void;
  name: string;
}
export const CategoryItem = ({name, handlePressFilter}: CategoryItemI) => {
  return (
    <TouchableWithoutFeedback onPress={handlePressFilter}>
      <Container key={name}>
        <Title>{name}</Title>
      </Container>
    </TouchableWithoutFeedback>
  );
};
