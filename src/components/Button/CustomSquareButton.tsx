import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './CustomSquareButtonStyle';
import {CustomSquareButtonType} from './CustomSquareButtonType';

export const CustomSquareButton = ({
  title,
  onPress,
}: CustomSquareButtonType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.squareButtonContainer}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
