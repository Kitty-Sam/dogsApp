import React, { FC, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export type InputBoxPropsType = {
  onSend: any;
  newMessage: string;
  setNewMessage: any;
};

export const InputBox: FC<InputBoxPropsType> = props => {
  const { onSend, newMessage, setNewMessage } = props;

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Icon name="md-add-outline" size={20} color="royalblue" />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder="type your message..."
      />
      <Icon onPress={() => onSend()} style={styles.send} name="arrow-forward" size={16} color="white" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,

    borderRadius: 10,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
