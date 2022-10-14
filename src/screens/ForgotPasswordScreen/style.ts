import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type ForgotPasswordScreenStyleType = {
  input: TextStyle;
  textLogIn: TextStyle;
  noteText: TextStyle;
  mainBlock: ViewStyle;
  buttonsContainer: ViewStyle;
};
export const styles = StyleSheet.create<ForgotPasswordScreenStyleType>({
  input: {
    borderRadius: 10,
    borderColor: COLORS.text.dark_blue,
    borderWidth: 2,
    textAlign: 'center',
    marginVertical: 10,
    color: COLORS.text.dark_blue,
  },
  mainBlock: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textLogIn: {
    position: 'absolute',
    top: 116,
    right: 24,
    zIndex: 10,
    // margin: 12,
  },
  noteText: { margin: 16 },
});
