import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MessagesNavigationName } from '../../enum/navigation';
import { ChatScreen } from '../../screens/ChatScreen/ChatScreen';
import { MessageStackParamList } from './type';
import { MessagesScreen } from '../../screens/MessagesScreen/MessagesScreen';
import { COLORS } from '../../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Messages = createNativeStackNavigator<MessageStackParamList>();

export const MessagesStack = () => {
  const navigation = useNavigation<any>();
  return (
    <Messages.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: COLORS.buttons.violet,
        headerTitleStyle: {
          color: COLORS.text.black,
        },
        headerTitleAlign: 'center',
        headerLeft: () => <Icon name={'menu-sharp'} size={24} onPress={() => navigation.openDrawer()} />,
      }}
    >
      <Messages.Screen name={MessagesNavigationName.MESSAGES} component={MessagesScreen} />
      <Messages.Screen name={MessagesNavigationName.CHAT} component={ChatScreen} />
    </Messages.Navigator>
  );
};
