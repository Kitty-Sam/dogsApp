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
import { COLORS } from '../../colors/colors';
import { HelpScreen } from '../../screens/HelpScreen/HelpScreen';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: COLORS.buttons.violet,
        drawerInactiveTintColor: COLORS.text.dark_blue,
        drawerType: 'front',
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
        name={DrawerNavigationName.PROFILE_STACK}
        component={PetsStack}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.PAW : iconsName.PAW_OUTLINE} color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationName.MAP}
        component={MapScreen}
        options={{
          drawerIcon: ({ color, size, focused }) => (
            <Icon name={focused ? iconsName.MAP : iconsName.MAP_OUTLINE} color={color} size={size} />
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
          drawerItemStyle: {
            marginTop: 80,
          },
        }}
      />
      <Drawer.Screen name={DrawerNavigationName.HELP} component={HelpScreen} />
    </Drawer.Navigator>
  );
};
