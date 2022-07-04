import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {CustomButtonStyleType} from './CustomButtonStyle';

export type CustomButtonType = {
  title: string;
  onPress: () => void;
  styles: CustomButtonStyleType;
};

export const CustomButton = ({title, onPress, styles}: CustomButtonType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.appButtonContainer}
      activeOpacity={0.5}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
