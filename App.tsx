import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerStack } from './src/navigation/Drawer/DrawerStack';
import { AuthStack } from './src/navigation/AuthStack/AuthStack';

export const App = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  return <NavigationContainer>{isloggedIn ? <DrawerStack /> : <AuthStack />}</NavigationContainer>;
};
