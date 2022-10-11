import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MessagesScreenProps } from './type';
import { MessagesNavigationName } from '../../enum/navigation';
import { HeaderTextItem } from '../../components/Text/HeaderTextItem/HeaderTextItem';
import { useSelector } from 'react-redux';
import { getCurrentUserId } from '../../store/selectors/loginSelector';

export const MessagesScreen: FC<MessagesScreenProps> = props => {
  const { navigation, route } = props;
  const avatar = 'https://cdn-icons-png.flaticon.com/512/194/194938.png';
  const currentUserId = useSelector(getCurrentUserId);
  console.log('currentUserId', currentUserId);
  const id = 'hnZENSLjcuPhQiDqNeSSPz7Drns1';

  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 24 }}>
        <HeaderTextItem>Users List</HeaderTextItem>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(MessagesNavigationName.CHAT, {
              id: id,
              name: 'Katrina',
              avatar: avatar,
            })
          }
        >
          <Text style={{ color: currentUserId === id ? 'red' : 'alck' }}> Katrina </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(MessagesNavigationName.CHAT, { id: '567', name: 'anton', avatar: avatar })}
        >
          <Text> Anton </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(MessagesNavigationName.CHAT, {
              id: 'WYbGcgFE2QTdWo3pIZXFillzhmn1',
              name: 'Moon',
              avatar: avatar,
            })
          }
        >
          <Text> Moon </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
