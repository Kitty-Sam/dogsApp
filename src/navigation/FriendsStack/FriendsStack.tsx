import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FriendsNavigationName } from '../../enum/navigation';
import { FriendsStackParamList } from './type';
import { FriendsScreen } from '../../screens/FriendsScreen/FriendsScreen';
import { FriendUniteScreen } from '../../screens/FriendUniteScreen/FriendUniteScreen';
import { UsersScreen } from '../../screens/UsersScreen/UsersScreen';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Friends = createNativeStackNavigator<FriendsStackParamList>();

export const FriendsStack = () => {
  const navigation = useNavigation<any>();
  return (
    <Friends.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: COLORS.buttons.violet,
        headerTitleStyle: {
          color: COLORS.text.black,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Friends.Screen
        name={FriendsNavigationName.USERS}
        component={UsersScreen}
        options={{ headerLeft: () => <Icon name={'menu-sharp'} size={24} onPress={() => navigation.openDrawer()} /> }}
      />
      <Friends.Screen name={FriendsNavigationName.FRIENDS} component={FriendsScreen} />
      <Friends.Screen name={FriendsNavigationName.FRIEND_PROFILE} component={FriendUniteScreen} />
    </Friends.Navigator>
  );
};
