import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type AddSectionStyleType = {
  buttonsContainer: ViewStyle;
  closeIcon: ViewStyle;
  input: TextStyle;
  modalCommonContainer: ViewStyle;
  modalInputBlock: ViewStyle;
};

const ios = Platform.OS === 'ios';

export const styles = StyleSheet.create<AddSectionStyleType>({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  closeIcon: {
    position: 'absolute',
    right: 220,
    top: 10,
    zIndex: 10,
    color: COLORS.text.dark_blue,
  },
  modalCommonContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    borderColor: COLORS.text.dark_blue,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: ios ? 10 : 8,
  },
  modalInputBlock: {
    padding: 24,
  },
});
