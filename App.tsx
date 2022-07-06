import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './src/navigation/MainStack/MainStack';

export const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
