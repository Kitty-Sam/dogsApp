import React from 'react';
import { Text } from 'react-native';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MessagesNavigationName } from '../../enum/navigation';
import { ChatItem } from '../../components/ChatItem/ChatItem';
import { MessageStackParamList } from '../../navigation/MessageStack/type';

export type StackScreenNavigationProps<
  T extends keyof NavParamList,
  NavParamList extends ParamListBase,
> = {
  navigation: StackNavigationProp<NavParamList, T>;
  route: RouteProp<NavParamList, T>;
};

export const MessagesScreen = (
  props: StackScreenNavigationProps<
    MessagesNavigationName.MESSAGES,
    MessageStackParamList
  >,
) => {
  const { navigation } = props;
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
