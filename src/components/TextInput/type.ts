import { TextStyle } from 'react-native';
import { ReactElement } from 'react';

export type CustomInputType = {
  icon?: ReactElement;
  error?: string;
  style?: TextStyle;
  iconPosition?: string;
  secureTextEntry?: boolean;
  label?: string;
  contextMenuHidden?: boolean;
  placeholder: string;
};
