import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../../screens/ProfileScreen';
import {ListItemsScreen} from '../../screens/ListItemsScreen';
import {UsefulInfoScreen} from '../../screens/UsefulInfoScreen/UsefulInfoScreen';
import {TabTopNavigationName} from '../../enum/navigationEum';
import {TabTopStackParamList} from './TabTopStackType';

const TabTop = createMaterialTopTabNavigator<TabTopStackParamList>();

export const TabTopStack = () => {
  return (
    <TabTop.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16, textTransform: 'capitalize'},
      }}>
      <TabTop.Screen
        name={TabTopNavigationName.PROFILE}
        component={ProfileScreen}
      />
      <TabTop.Screen
        name={TabTopNavigationName.USEFUL_INFO}
        component={UsefulInfoScreen}
      />
      <TabTop.Screen
        name={TabTopNavigationName.FRIENDS}
        component={ListItemsScreen}
      />
    </TabTop.Navigator>
  );
};
