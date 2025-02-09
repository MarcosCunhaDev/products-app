import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import {RootStackParamList} from './types';
import linking from './linking';


const Stack = createNativeStackNavigator<RootStackParamList>();

export const NavigationContainerWrapper = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="details" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
