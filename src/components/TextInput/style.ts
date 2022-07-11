import {StyleSheet, ViewStyle} from 'react-native';

export type ModalInsideContainerStyleType = {
  customTextInputContainer: ViewStyle;
};

export const styles = StyleSheet.create<ModalInsideContainerStyleType>({
  customTextInputContainer: {
    borderColor: 'grey',
    margin: 8,
    borderWidth: 2,
    width: '80%',
    borderRadius: 10,
    paddingHorizontal: 8,
  },
});
