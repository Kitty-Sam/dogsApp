import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileScreen} from '../../screens/ProfileScreen/ProfileScreen';
import {ListItemsScreen} from '../../screens/FriendsScreen/ListItemsScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {UsefulBottomStack} from '../UsefulStack/UsefulStack';
import {MessagesStack} from '../MessageStack/MessagesStack';
import {DrawerNavigationName} from '../../enum/navigation';
import {DrawerStackParamList} from './type';
import {iconsName} from '../../enum/iconsName';

const Drawer = createDrawerNavigator<DrawerStackParamList>();

// const avatar1 =
//   'https://cdnstatic.rg.ru/uploads/images/222/22/41/photorep_imageid_513152_19_b6265e7a.jpg';

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        drawerType: 'front',
        drawerContentStyle: {marginTop: 150, width: 250},
        drawerStyle: {
          borderBottomEndRadius: 20,
          borderTopEndRadius: 20,
          backgroundColor: '#e8faf4',
        },
        drawerContentContainerStyle: {
          width: 350,
        },
      }}>
      <Drawer.Screen
        name={DrawerNavigationName.PROFILE}
        component={ProfileScreen}
        options={{
          drawerIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? iconsName.PERSON : iconsName.PERSON_OUTLINE}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationName.USEFUL_STACK}
        component={UsefulBottomStack}
        options={{
          drawerIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? iconsName.HOME : iconsName.HOME_OUTLINE}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationName.FRIENDS}
        component={ListItemsScreen}
        options={{
          drawerIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? iconsName.PEOPLE : iconsName.PEOPLE_OUTLINE}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={DrawerNavigationName.MESSAGE_STACK}
        component={MessagesStack}
        options={{
          drawerIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? iconsName.CHATBOX : iconsName.CHATBOX_OUTLINE}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
