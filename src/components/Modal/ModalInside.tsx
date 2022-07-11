import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {CustomTextInput} from '../TextInput/CustomTextInput';
import {styles} from './style';
import {ModalInsideInfoType} from './type';

export const ModalInside = ({
  addTitle,
  setTitle,
  addInfo,
  setInfo,
  placeholderTitle,
  placeholderInfo,
}: ModalInsideInfoType) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalInsideContainer}>
          <CustomTextInput
            placeholder={placeholderTitle}
            value={addTitle}
            setValue={setTitle}
          />
          <CustomTextInput
            placeholder={placeholderInfo}
            value={addInfo}
            setValue={setInfo}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
