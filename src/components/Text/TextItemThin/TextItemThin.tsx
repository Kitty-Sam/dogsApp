import React from 'react';
import { Text, TextStyle } from 'react-native';
import { styles } from './style';

export type TextItemPropsType = {
  children?: React.ReactNode;
  style?: TextStyle;
};

export const TextItemThin = ({ children, style }: TextItemPropsType) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
