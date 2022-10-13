import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MessagesNavigationName } from '../../enum/navigation';
import { ChatScreen } from '../../screens/ChatScreen/ChatScreen';
import { MessageStackParamList } from './type';
import { MessagesScreen } from '../../screens/MessagesScreen/MessagesScreen';
import { COLORS } from '../../colors/colors';

const Messages = createNativeStackNavigator<MessageStackParamList>();

export const MessagesStack = () => {
  return (
    <Messages.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: COLORS.buttons.violet,
        headerTitleStyle: {
          color: COLORS.text.black,
        },
      }}
    >
      <Messages.Screen name={MessagesNavigationName.MESSAGES} component={MessagesScreen} />
      <Messages.Screen name={MessagesNavigationName.CHAT} component={ChatScreen} />
    </Messages.Navigator>
  );
};
