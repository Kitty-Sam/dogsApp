import React from 'react';
import { Text, TextStyle } from 'react-native';
import { styles } from './style';

export type HeaderTextItemPropsType = {
  children?: React.ReactNode;
  style?: TextStyle;
};

export const HeaderTextItem = ({ children, style }: HeaderTextItemPropsType) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
