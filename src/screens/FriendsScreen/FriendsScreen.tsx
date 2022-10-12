import React, { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { FriendsScreenProps } from './type';
import { Text } from 'react-native';
import { FriendsNavigationName } from '../../enum/navigation';

export const FriendsScreen: FC<FriendsScreenProps> = props => {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ margin: 24 }}>
      <HeaderTextItem>Friends List</HeaderTextItem>
      <Text onPress={() => navigation.navigate(FriendsNavigationName.FRIEND_PROFILE, { id: '123', name: 'Lola' })}>
        Lola
      </Text>
      <Text onPress={() => navigation.navigate(FriendsNavigationName.FRIEND_PROFILE, { id: '1234', name: 'Olga' })}>
        Olga
      </Text>
    </SafeAreaView>
  );
};
