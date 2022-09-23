import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerStack } from './src/navigation/Drawer/DrawerStack';
import { AuthStack } from './src/navigation/AuthStack/AuthStack';
import { useSelector } from 'react-redux';
import { getLoginStatus } from './src/store/selectors/loginSelector';
import { StripeProvider } from '@stripe/stripe-react-native';
import { fetchPublishAbleKey } from './helpers';
import { Toast } from './src/components/Toast/Toast';
import { NativeBaseProvider } from 'native-base';

export const App = () => {
  const isLogged = useSelector(getLoginStatus);
  const [publishableKey, setPublishableKey] = useState('');

  useEffect(() => {
    const init = async () => {
      try {
        const publishableKey = await fetchPublishAbleKey();
        console.log('app publish key', publishableKey);

        if (publishableKey) {
          setPublishableKey(publishableKey);
        }
      } catch (e) {
        // @ts-ignore
        console.log(e.message);
      }
    };
    init();
  }, []);

  return (
    <NativeBaseProvider>
      <Toast />
      <StripeProvider publishableKey={publishableKey}>
        <NavigationContainer>{isLogged ? <DrawerStack /> : <AuthStack />}</NavigationContainer>
      </StripeProvider>
    </NativeBaseProvider>
  );
};
