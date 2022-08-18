import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { CustomInputType } from './type';
import { styles } from './style';
import { COLORS } from '../../colors/colors';

export const CustomTextInput: FC<CustomInputType> = ({ style, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={COLORS.text.grey}
      style={[styles.customTextInputContainer, style]}
    />
  );
};
