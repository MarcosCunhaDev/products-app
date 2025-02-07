import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

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
        paddingLeft: 10,
        paddingRight: 20,
      }}>
      <View style={{gap: 15, flexDirection: 'row'}}>
        {loadingItems.map(item => {
          return (
            <View
              key={item}
              style={{
                borderRadius: 8,
                backgroundColor: 'tomato',
                justifyContent: 'center',
                alignItems: 'center',
                height: 40,
                width: 100,
                overflow: 'hidden',
              }}>
              <ShimmerPlaceHolder
                LinearGradient={LinearGradient}
                style={{flex: 1}}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
