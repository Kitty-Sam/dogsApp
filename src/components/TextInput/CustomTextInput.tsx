import React from 'react';
import { TextInput } from 'react-native';
import { CustomInputType } from './type';
import { styles } from './style';

export const CustomTextInput = ({ placeholder, value, setValue }: CustomInputType) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={(text: string) => setValue(text)}
      style={styles.customTextInputContainer}
    />
  );
};
