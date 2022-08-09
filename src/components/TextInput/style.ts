import { Platform, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type ModalInsideContainerStyleType = {
  customTextInputContainer: ViewStyle;
};

const ios = Platform.OS === 'ios';

export const styles = StyleSheet.create<ModalInsideContainerStyleType>({
  customTextInputContainer: {
    borderColor: COLORS.text.dark_blue,
    margin: 8,
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    padding: ios ? 10 : 8,
  },
});
