import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './ChatItemStyle';
import {ChatItemType} from './ChatItemType';

export const ChatItem = ({name, message, onPress, avatar}: ChatItemType) => {
  return (
    <TouchableOpacity style={styles.chatItemContainer} onPress={onPress}>
      <View>
        <Image source={{uri: avatar}} style={styles.avatar} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};
