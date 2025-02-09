import React from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {ContainerRow, Item} from './CategoriesLoader.styles';

const loadingItems = ['0', '1', '2', '3', '4'];
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const CategoriesLoader = () => {
  return (
    <ScrollView
      horizontal
      style={{
        marginBottom: 20,
        marginTop: 10,
        flexGrow: 0,
      }}
      contentContainerStyle={{
        paddingVertical: 10,
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <ContainerRow>
        {loadingItems.map(item => {
          return (
            <Item key={item}>
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{flex: 1}}
              />
            </Item>
          );
        })}
      </ContainerRow>
    </ScrollView>
  );
};
