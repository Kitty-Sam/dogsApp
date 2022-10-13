import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FriendsNavigationName } from '../../enum/navigation';
import { FriendsStackParamList } from './type';
import { FriendsScreen } from '../../screens/FriendsScreen/FriendsScreen';
import { FriendUniteScreen } from '../../screens/FriendUniteScreen/FriendUniteScreen';
import { UsersScreen } from '../../screens/UsersScreen/UsersScreen';
import { COLORS } from '../../colors/colors';

const Friends = createNativeStackNavigator<FriendsStackParamList>();

export const FriendsStack = () => {
  return (
    <Friends.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: COLORS.buttons.violet,
        headerTitleStyle: {
          color: COLORS.text.black,
        },
      }}
    >
      <Friends.Screen name={FriendsNavigationName.USERS} component={UsersScreen} options={{ headerShown: false }} />
      <Friends.Screen name={FriendsNavigationName.FRIENDS} component={FriendsScreen} options={{ headerShown: false }} />
      <Friends.Screen name={FriendsNavigationName.FRIEND_PROFILE} component={FriendUniteScreen} />
    </Friends.Navigator>
  );
};
