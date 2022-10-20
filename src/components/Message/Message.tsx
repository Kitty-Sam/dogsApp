import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ChatType } from '../../screens/ChatScreenNew/ChatScreenNew';

dayjs.extend(relativeTime);

export type MessagePropsType = {
  message: ChatType;
};

export const Message: FC<MessagePropsType> = ({ message }) => {
  const isMyMessage = () => {
    return message.user._id === 'u1';
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
          alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',

    // Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
});
