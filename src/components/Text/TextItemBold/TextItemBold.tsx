import React, { ReactNode } from 'react';
import { Text, TextStyle } from 'react-native';
import { styles } from './style';

export type TextItemBoldPropsType = {
  children?: ReactNode;
  style?: TextStyle;
};

export const TextItemBold = ({ children, style }: TextItemBoldPropsType) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
