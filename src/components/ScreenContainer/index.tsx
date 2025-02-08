import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';


const ScreenContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

export default ScreenContainer;
