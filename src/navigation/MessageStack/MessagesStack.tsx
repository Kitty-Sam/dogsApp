import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MessagesNavigationName} from '../../enum/navigation';
import {MessagesScreen} from '../../screens/MessagesScreen/MessagesScreen';
import {ChatScreen} from '../../screens/ChatScreen/ChatScreen';
import {MessageStackParamList} from './type';

const Messages = createNativeStackNavigator<MessageStackParamList>();

export const MessagesStack = () => {
  return (
    <Messages.Navigator>
      <Messages.Screen
        name={MessagesNavigationName.MESSAGES}
        component={MessagesScreen}
        options={{headerShown: false}}
      />
      <Messages.Screen
        name={MessagesNavigationName.CHAT}
        component={ChatScreen}
        // options={({route}) => ({
        //   title: route.params.userName,
        // })}
      />
    </Messages.Navigator>
  );
};
