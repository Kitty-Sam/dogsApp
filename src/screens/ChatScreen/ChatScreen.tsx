import React, { FC, useCallback, useLayoutEffect, useState } from 'react';
import { addDoc, collection, onSnapshot, orderBy, query, doc } from 'firebase/firestore';
import { Composer, ComposerProps, GiftedChat, IMessage, SendProps } from 'react-native-gifted-chat';
import { db } from '../../../firebase';
import { ChatScreenProps } from './type';

export type ChatType = {
  _id: string;
  createdAt: any;
  text: string;
  user: any;
};

export const ChatScreen: FC<ChatScreenProps> = props => {
  const { navigation, route } = props;
  const { id, name, avatar } = route.params;
  const [messages, setMessages] = useState<ChatType[]>([]);

  const chatsCollection = collection(db, 'chats');
  const chat = doc(chatsCollection, `${id}`);
  const messagesCollection = collection(chat, 'messages');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${name}`,
      headerBackTitle: 'Back',
      // headerLeft: () => (
      //   <View style={{ marginLeft: 8, flexDirection: 'row' }}>
      //     <Avatar size={44} rounded source={{ uri: avatar }} avatarStyle={{ marginLeft: 4 }} />
      //   </View>
      // ),
    });

    const q = query(messagesCollection, orderBy('createdAt', 'desc'));

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

  const onSend = useCallback((messages: ChatType[]) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    const { _id, createdAt, text, user } = messages[0];

    addDoc(messagesCollection, { _id, createdAt, text, user });
  }, []);

  const ChatComposer = (
    props: ComposerProps & {
      onSend: SendProps<IMessage>['onSend'];
      text: SendProps<IMessage>['text'];
    },
  ) => {
    return (
      <Composer
        {...props}
        textInputProps={{
          ...props.textInputProps,
          blurOnSubmit: false,
          multiline: false,
          onSubmitEditing: () => {
            if (props.text && props.onSend) {
              props.onSend({ text: props.text.trim() }, true);
            }
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      showUserAvatar={true}
      showAvatarForEveryMessage={true}
      renderUsernameOnMessage={true}
      onSend={messages => onSend(messages)}
      user={{
        _id: id,
        name: name,
        avatar: avatar,
      }}
      renderComposer={ChatComposer}
    />
  );
};
