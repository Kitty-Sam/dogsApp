import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabTopStack} from './TabTopStack';
import {TabBottomNavigationName} from '../enum/navigationEum';
import {MessagesStack} from './MessagesStack';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const TabBottomStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={TabBottomNavigationName.HOME}
        component={TabTopStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabBottomNavigationName.MESSAGES_STACK}
        component={MessagesStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'chatbox' : 'chatbox-outline'}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
