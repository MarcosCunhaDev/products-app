import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text>Home</Text>

      <Button
        title="Go to Next Screen"
        onPress={() => navigation.navigate('ProductDetails')}
      />
    </View>
  );
};

export default Home;
