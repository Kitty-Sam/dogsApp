import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { UsefulStack } from '../UsefulStack/UsefulStack';
import { MessagesStack } from '../MessageStack/MessagesStack';
import { DrawerNavigationName } from '../../enum/navigation';
import { DrawerStackParamList } from './type';
import { iconsName } from '../../enum/iconsName';
import { CustomDrawer } from './CustomDrawer';
import { CalendarScreen } from '../../screens/CalendarScreen/CalendarScreen';
import { MapScreen } from '../../screens/MapScreen/MapScreen';
import { PetsStack } from '../PetsStack/PetsStack';
import { SettingsScreen } from '../../screens/SettingsScreen/SettingsScreen';
import { FriendsStack } from '../FriendsStack/FriendsStack';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
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
        component={UsefulStack}
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
        name={DrawerNavigationName.PROFILE_STACK}
        component={PetsStack}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.PERSON : iconsName.PERSON_OUTLINE} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationName.FRIENDS_STACK}
        component={FriendsStack}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.PEOPLE : iconsName.PEOPLE_OUTLINE} color={color} size={size} />
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
      <Drawer.Screen
        name={DrawerNavigationName.SETTINGS}
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.SETTINGS : iconsName.SETTINGS_OUTLINE} color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
