import { Platform, StyleSheet, ViewStyle } from 'react-native';

export type ModalInsideContainerStyleType = {
  customTextInputContainer: ViewStyle;
};

const ios = Platform.OS === 'ios';

export const styles = StyleSheet.create<ModalInsideContainerStyleType>({
  customTextInputContainer: {
    borderColor: 'grey',
    margin: 8,
    borderWidth: 2,
    width: '80%',
    borderRadius: 10,
    paddingHorizontal: 8,
    padding: ios ? 10 : '',
  },
});
