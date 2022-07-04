import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export type ChatItemType = {
  name: string;
  message: string;
  avatar: string;
  onPress: () => void;
};

export const ChatItem = ({name, message, onPress, avatar}: ChatItemType) => {
  return (
    <TouchableOpacity
      style={{
        borderColor: 'black',
        borderWidth: 2,
        marginHorizontal: 16,
        marginVertical: 4,
        padding: 4,
        borderRadius: 10,
        flexDirection: 'row',
      }}
      onPress={onPress}>
      <View>
        <Image
          source={{uri: avatar}}
          style={{width: 50, height: 50, borderRadius: 25, marginHorizontal: 8}}
        />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};
