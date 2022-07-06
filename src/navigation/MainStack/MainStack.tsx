import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBottomStack} from '../TabBottonStack/TabBottomStack';
import {MainNavigationName} from '../../enum/navigationEum';
import {ErrorScreen} from '../../screens/ErrorScreen';
import {MainStackParamList} from './MainStackType';

const Main = createNativeStackNavigator<MainStackParamList>();

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
