import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './style';
import {Type} from './type';

export const CustomSquareButton = ({title, onPress}: Type) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.squareButtonContainer}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
