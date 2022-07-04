import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MessagesNavigationName} from '../enum/enum';
import {MessagesScreen} from '../screens/MessagesScreen';
import {ChatScreen} from '../screens/ChatScreen';

const Messages = createNativeStackNavigator();

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
