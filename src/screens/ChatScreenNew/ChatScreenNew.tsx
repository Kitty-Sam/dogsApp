import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { Message } from '../../components/Message/Message';
import { InputBox } from '../../components/InputBox/InputBox';
import { addDoc, collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../../firebase';
import { ChatScreenProps } from '../ChatScreen/type';

export type ChatType = {
  _id: string;
  createdAt: any;
  text: string;
  user: {
    _id: string;
    avatar: string;
    name: string;
  };
};

// export const ChatScreenNew: FC<ChatScreenProps> = props => {
//   const { navigation, route } = props;
//   const { id, name, avatar } = route.params;
//
//   const [messages, setMessages] = useState<ChatType[]>([]);
//   const [newMessage, setNewMessage] = useState('');
//
//   const chatsCollection = collection(db, 'chats');
//   const chat = doc(chatsCollection, `${id}`);
//   const messagesCollection = collection(chat, 'messages');
//
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: `${name}`,
//       headerBackTitle: 'Back',
//     });
//
//     const q = query(messagesCollection, orderBy('createdAt', 'desc'));
//
//     const unsubscribe = onSnapshot(q, snapshot =>
//       setMessages(
//         snapshot.docs.map(doc => ({
//           _id: doc.data()._id,
//           createdAt: doc.data().createdAt.toDate(),
//           text: doc.data().text,
//           user: doc.data().user,
//         })),
//       ),
//     );
//
//     return () => {
//       unsubscribe();
//     };
//   }, [navigation]);
//
//   const onSend = useCallback((messages: ChatType[]) => {
//     const addItem = {
//       _id: String(Date.now()),
//       createdAt: Date.now(),
//       text: newMessage,
//       user: {
//         _id: id,
//         avatar,
//         name,
//       },
//     };
//     setMessages(previousMessages => [addItem, ...previousMessages]);
//     // const { _id, createdAt, text, user } = messages[0];
//
//     addDoc(messagesCollection, addItem);
//   }, []);
//
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
//       style={styles.bg}
//     >
//       <View style={styles.bg}>
//         <FlatList data={messages} renderItem={({ item }) => <Message message={item} />} style={styles.list} inverted />
//         <InputBox onSend={onSend} newMessage={newMessage} setNewMessage={setNewMessage} />
//       </View>
//     </KeyboardAvoidingView>
//   );
// };
// export const styles = StyleSheet.create({
//   list: {
//     padding: 10,
//   },
//   bg: {
//     flex: 1,
//   },
// });
