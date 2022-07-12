import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerStack } from './src/navigation/Drawer/DrawerStack';

export const App = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};
