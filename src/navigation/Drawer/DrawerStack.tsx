import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { UsefulBottomStack } from '../UsefulStack/UsefulStack';
import { MessagesStack } from '../MessageStack/MessagesStack';
import { DrawerNavigationName } from '../../enum/navigation';
import { DrawerStackParamList } from './type';
import { iconsName } from '../../enum/iconsName';
import { CustomDrawer } from './CustomDrawer';
import { ProfileScreen } from '../../screens/ProfileScreen/ProfileScreen';
import { CalendarScreen } from '../../screens/CalendarScreen/CalendarScreen';
import { COLORS } from '../../colors/colors';
import { MapScreen } from '../../screens/MapScreen/MapScreen';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation
      screenOptions={{
        // drawerActiveTintColor: COLORS.buttons.brown,
        // drawerInactiveTintColor: COLORS.text.dark_blue,
        // drawerType: 'front',
        drawerContentStyle: { marginTop: 300, width: 250 },
        drawerStyle: {
          borderBottomEndRadius: 20,
          borderTopEndRadius: 20,
          // backgroundColor: COLORS.buttons.peach,
        },
        // headerTintColor: COLORS.text.dark_blue,
        // // headerStyle: { backgroundColor: COLORS.buttons.peach },
        // drawerContentContainerStyle: {
        //   width: 350,
        // },
      }}
    >
      <Drawer.Screen
        name={DrawerNavigationName.USEFUL_STACK}
        component={UsefulBottomStack}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.ATTACH : iconsName.ATTACH_OUTLINE} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationName.MAP}
        component={MapScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.EARTH : iconsName.EARTH_OUTLINE} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationName.CALENDAR}
        component={CalendarScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.CALENDAR : iconsName.CALENDAR_OUTLINE} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationName.PROFILE}
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.PERSON : iconsName.PERSON_OUTLINE} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationName.MESSAGE_STACK}
        component={MessagesStack}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.CHATBOX : iconsName.CHATBOX_OUTLINE} color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
