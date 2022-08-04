import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigationName } from '../../enum/navigation';
import { AuthStackParamList } from './type';
import { LoginScreen } from '../../screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '../../screens/RegisterScreen/RegisterScreen';
import { WelcomeScreen } from '../../screens/WelcomeScreen/WelcomeScreen';

const Auth = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen name={AuthNavigationName.WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
      <Auth.Screen name={AuthNavigationName.LOGIN} component={LoginScreen} options={{ headerShown: false }} />
      <Auth.Screen name={AuthNavigationName.REGISTER} component={RegisterScreen} options={{ headerShown: false }} />
    </Auth.Navigator>
  );
};
