import React from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MessagesNavigationName} from '../enum/navigationEum';
import {ChatItem} from '../components/ChatItem/ChatItem';

export const MessagesScreen = () => {
  const navigation = useNavigation();
  const avatar1 =
    'https://cdnstatic.rg.ru/uploads/images/222/22/41/photorep_imageid_513152_19_b6265e7a.jpg';

  return (
    <>
      <Text>Messages</Text>
      <ChatItem
        name={'Irina'}
        message={'Hello, how are you?'}
        avatar={avatar1}
        onPress={() => navigation.navigate(MessagesNavigationName.CHAT)}
      />
      <ChatItem
        name={'Irina'}
        message={'Hello, how are you?'}
        avatar={avatar1}
        onPress={() => navigation.navigate(MessagesNavigationName.CHAT)}
      />
      <ChatItem
        name={'Irina'}
        message={'Hello, how are you?'}
        avatar={avatar1}
        onPress={() => navigation.navigate(MessagesNavigationName.CHAT)}
      />
    </>
  );
};
