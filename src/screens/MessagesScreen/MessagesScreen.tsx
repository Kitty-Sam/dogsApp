import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessagesScreenProps } from './type';
import { MessagesNavigationName } from '../../enum/navigation';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';

export const MessagesScreen: FC<MessagesScreenProps> = props => {
  const { navigation, route } = props;
  const avatar = 'https://cdn-icons-png.flaticon.com/512/194/194938.png';

  return (
    <SafeAreaView style={{ margin: 24 }}>
      <HeaderTextItem>Users List</HeaderTextItem>
      <TouchableOpacity
        onPress={() => navigation.navigate(MessagesNavigationName.CHAT, { id: '123', name: 'kitty', avatar: avatar })}
      >
        <Text> Kitty </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(MessagesNavigationName.CHAT, { id: '345', name: 'olga', avatar: avatar })}
      >
        <Text> Olga </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(MessagesNavigationName.CHAT, { id: '567', name: 'anton', avatar: avatar })}
      >
        <Text> Anton </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
