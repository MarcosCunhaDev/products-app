import {View, Text} from 'react-native';
import React from 'react';

export const EmptyState = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', paddingTop: 200, gap: 10}}>
      <Text style={{fontSize: 24, fontWeight: '600'}}>?</Text>
      <Text style={{fontSize: 24, fontWeight: '600'}}>No Products Found</Text>
      <Text>Your search did not match any products.</Text>
      <Text>Please try again with others options.</Text>
    </View>
  );
};
