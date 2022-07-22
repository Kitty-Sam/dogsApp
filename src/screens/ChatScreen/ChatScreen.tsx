import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './style';

export const ChatScreen = (props: any) => {
  const { route } = props;

  return (
    <SafeAreaView style={styles.chatContainer}>
      <View style={styles.titleContainer}>
        <Text>Your:</Text>
        <Text>{route.params.name}</Text>
      </View>
    </SafeAreaView>
  );
};
