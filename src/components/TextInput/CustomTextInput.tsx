import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react';
import {TextInput, View} from 'react-native';

export type InputHandler = {
  getValue: () => string;
  onFocus: () => void;
};

export type CustomTextInputType = {
  placeholder: string;
  onSubmit?: () => void;
};

export const CustomTextInput = forwardRef<InputHandler, CustomTextInputType>(
  ({placeholder, onSubmit}, ref) => {
    const [value, setValue] = useState('');

    const textInputRef = useRef<TextInput>(null);

    useImperativeHandle(ref, () => ({
      getValue: () => value,
      onFocus: () => textInputRef.current?.focus(),
    }));

    return (
      <View>
        <TextInput
          ref={textInputRef}
          value={value}
          onChangeText={(text: string) => setValue(text)}
          placeholder={placeholder}
          returnKeyType={onSubmit ? 'next' : 'done'}
          onSubmitEditing={onSubmit}
          style={{
            borderColor: 'black',
            margin: 8,
            borderWidth: 2,
            width: '80%',
            borderRadius: 10,
            paddingHorizontal: 8,
          }}
        />
      </View>
    );
  },
);
