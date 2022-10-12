import React, { FC, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { UsersScreenProps } from './type';
import { AppButton } from '../../components/Button/AppButton';
import { FriendsNavigationName } from '../../enum/navigation';

export const UsersScreen: FC<UsersScreenProps> = props => {
  const { navigation } = props;
  const [isFollow, setIsFollow] = useState<boolean>(false);
  return (
    <SafeAreaView style={{ margin: 24 }}>
      <HeaderTextItem>Users List</HeaderTextItem>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() =>
          navigation.navigate(FriendsNavigationName.FRIEND_PROFILE, {
            id: '345',
            name: 'Lola',
            isFollow: isFollow,
          })
        }
      >
        <Text>Lola</Text>
        <AppButton onPress={() => setIsFollow(prev => !prev)} title={isFollow ? 'unfollow' : 'follow'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
