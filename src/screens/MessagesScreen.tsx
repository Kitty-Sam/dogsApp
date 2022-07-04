import React from 'react';
import {FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton} from '../components/Button/CustomButton';
import {styles} from '../components/Button/CustomButtonStyle';
import {MessagesNavigationName} from '../enum/enum';
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
