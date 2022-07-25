import React, { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from '@rneui/themed';

import { signOut } from 'firebase/auth';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../../firebase';
import { AuthNavigationName } from '../../enum/navigation';

const imgAvatar = 'https://cdn-icons-png.flaticon.com/512/194/194938.png';

export const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const signOutNow = async () => {
    try {
      await signOut(auth);
      navigation.navigate(AuthNavigationName.LOGIN);
    } catch (error) {
      Alert.alert(error);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{ marginLeft: 16 }}>
          <Avatar size={46} rounded source={{ uri: imgAvatar }} />
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{
            marginRight: 10,
            borderColor: 'grey',
            borderWidth: 2,
            padding: 4,
            borderRadius: 5,
          }}
          onPress={signOutNow}
        >
          <Text>log Out</Text>
        </TouchableOpacity>
      ),
    });

    const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot =>
      setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        })),
      ),
    );

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    const { _id, createdAt, text, user } = messages[0];

    addDoc(collection(db, 'chats'), { _id, createdAt, text, user });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
      }}
    />
  );
};
