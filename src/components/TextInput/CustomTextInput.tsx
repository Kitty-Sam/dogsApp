import React from 'react';
import { TextInput } from 'react-native';
import { CustomInputType } from './type';
import { styles } from './style';
import { COLORS } from '../../colors/colors';

export const CustomTextInput = ({ placeholder, value, setValue }: CustomInputType) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      placeholderTextColor={COLORS.text.grey}
      onChangeText={(text: string) => setValue(text)}
      style={styles.customTextInputContainer}
    />
  );
};
