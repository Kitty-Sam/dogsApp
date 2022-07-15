import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ShopsScreen } from '../../screens/ShopsScreen/ShopsScreen';
import { ClinicsScreen } from '../../screens/ClinicsScreen/ClinicsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MastersScreen } from '../../screens/MastersScreen/MastersScreen';
import { TabBottomNavigationName } from '../../enum/navigation';
import { UsefulStackParamList } from './type';
import { iconsName } from '../../enum/iconsName';

const Tab = createBottomTabNavigator<UsefulStackParamList>();

export const UsefulBottomStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={TabBottomNavigationName.SHOPS}
        component={ShopsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.SHOPPING : iconsName.SHOPPING_OUTLINE} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TabBottomNavigationName.CLINICS}
        component={ClinicsScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.HOSPITAL_BOX : iconsName.HOSPITAL_BOX_OUTLINE} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={TabBottomNavigationName.MASTERS}
        component={MastersScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              name={focused ? iconsName.ACCOUNT_SUPERVISOR : iconsName.ACCOUNT_SUPERVISOR_OUTLINE}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
