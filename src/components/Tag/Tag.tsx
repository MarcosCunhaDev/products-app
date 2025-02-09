import React from 'react';
import {Container, Title} from './Tag.styles';

export const Tag = ({text}: {text: string}) => {
  if (!text) return null;

  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};
