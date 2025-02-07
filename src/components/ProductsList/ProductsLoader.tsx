import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const loadingItems = ['0', '1', '2', '3', '4'];
const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const ProductsLoader = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flexGrow: 0}}>
        <View style={{gap: 20, paddingHorizontal: 20}}>
          {loadingItems.map((item, _) => {
            return (
              <View
                key={item}
                style={{
                  overflow: 'hidden',
                  borderRadius: 8,
                  height: 120,
                  width: '100%',
                }}>
                <ShimmerPlaceHolder
                  LinearGradient={LinearGradient}
                  style={{width: '100%', flex: 1}}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
