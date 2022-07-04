import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBottomStack} from './TabBottomStack';
import {MainNavigationName} from '../enum/enum';
import {ErrorScreen} from '../screens/ErrorScreen';

const Main = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Main.Navigator>
      <Main.Screen
        name={MainNavigationName.TAB_BOTTOM}
        component={TabBottomStack}
        options={{headerShown: false}}
      />
      <Main.Screen name={MainNavigationName.ERROR} component={ErrorScreen} />
    </Main.Navigator>
  );
};
