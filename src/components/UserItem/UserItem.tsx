import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationName, MessagesNavigationName } from '../../enum/navigation';
import { styles } from './style';
import { UserItemType } from './type';

export const UserItem: FC<UserItemType> = ({ name }) => {
  const navigation = useNavigation();

  const navigateInChat = () => {
    //todo
    // @ts-ignore
    navigation.navigate(DrawerNavigationName.MESSAGE_STACK, {
      screen: MessagesNavigationName.CHAT,
      params: { name: name },
    });
  };

  return (
    <TouchableOpacity style={styles.textContainer} onPress={navigateInChat}>
      <Text style={styles.text}>name: {name}</Text>
    </TouchableOpacity>
  );
};
