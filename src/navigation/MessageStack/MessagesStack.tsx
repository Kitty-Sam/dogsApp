import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MessagesNavigationName } from '../../enum/navigation';
import { ChatScreen } from '../../screens/ChatScreen/ChatScreen';
import { MessageStackParamList } from './type';
import { MessagesScreen } from '../../screens/MessagesScreen/MessagesScreen';

const Messages = createNativeStackNavigator<MessageStackParamList>();

export const MessagesStack = () => {
  return (
    <Messages.Navigator>
      <Messages.Screen
        name={MessagesNavigationName.MESSAGES}
        component={MessagesScreen}
        options={{ headerShown: false }}
      />
      <Messages.Screen name={MessagesNavigationName.CHAT} component={ChatScreen} />
    </Messages.Navigator>
  );
};
