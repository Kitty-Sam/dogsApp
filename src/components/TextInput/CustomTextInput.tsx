import React from 'react';
import {TextInput, View} from 'react-native';

export type CustomTextInputType = {
  placeholder: string;
  value: string;
  setValue: (text: string) => void;
};

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
      style={{
        borderColor: 'black',
        margin: 8,
        borderWidth: 2,
        width: '80%',
        borderRadius: 10,
        paddingHorizontal: 8,
      }}
    />
  );
};
