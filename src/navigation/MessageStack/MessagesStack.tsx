import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MessagesNavigationName } from '../../enum/navigation';
import { ChatScreen } from '../../screens/ChatScreen/ChatScreen';
import { MessageStackParamList } from './type';

const Messages = createNativeStackNavigator<MessageStackParamList>();

export const MessagesStack = () => {
  return (
    <Messages.Navigator>
      <Messages.Screen name={MessagesNavigationName.CHAT} component={ChatScreen} options={{ headerShown: false }} />
    </Messages.Navigator>
  );
};
