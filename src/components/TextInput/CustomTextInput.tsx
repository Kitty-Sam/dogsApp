import React from 'react';
import {TextInput} from 'react-native';
import {CustomTextInputType} from './CustomTextInputType';
import {styles} from './CustomTextInputStyle';

export const CustomTextInput = ({
  placeholder,
  value,
  setValue,
}: CustomTextInputType) => {
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={(text: string) => setValue(text)}
      style={styles.customTextInputContainer}
    />
  );
};
