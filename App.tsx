import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerStack } from './src/navigation/Drawer/DrawerStack';
import { AuthStack } from './src/navigation/AuthStack/AuthStack';
import { useSelector } from 'react-redux';
import { getLoginStatus } from './src/store/selectors/loginSelector';

export const App = () => {
  const isLogged = useSelector(getLoginStatus);

  return <NavigationContainer>{isLogged ? <DrawerStack /> : <AuthStack />}</NavigationContainer>;
};
