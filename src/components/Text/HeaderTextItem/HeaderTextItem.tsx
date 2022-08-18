import React, { FC } from 'react';
import { Text } from 'react-native';
import { styles } from './style';
import { TextPropsType } from '../type';

export const HeaderTextItem: FC<TextPropsType> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
