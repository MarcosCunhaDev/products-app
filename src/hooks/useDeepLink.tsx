import {useEffect, useState} from 'react';
import {Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@navigation/types';

type DeepLinkParams = {
  screen: keyof RootStackParamList;
  params?: Record<string, string>;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const useDeepLink = () => {
  const [deepLinkData, setDeepLinkData] = useState<DeepLinkParams | null>(null);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  useEffect(() => {
    const handleDeepLink = (event: {url: string}) => {
      const {url} = event;
      const route = url.replace(/.*?:\/\//g, '');
      const [screen, ...params] = route.split('/');
      console.log({screen, ...params});

      const parsedParams: Record<string, string> = {};
      if (screen === 'home' && params.length > 0) {
        parsedParams.category = params[0];
      }

      console.log({parsedParams});
      setDeepLinkData({
        screen: screen as keyof RootStackParamList,
        params: parsedParams,
      });
    };

    Linking.addEventListener('url', handleDeepLink);

    // Check for initial deep link
    Linking.getInitialURL().then(url => {
      if (url) {
        handleDeepLink({url});
      }
    });

    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);

  useEffect(() => {
    if (deepLinkData) {
      navigation.navigate(deepLinkData?.screen, deepLinkData?.params);
    }
  }, [deepLinkData, navigation]);

  return deepLinkData;
};

export default useDeepLink;
