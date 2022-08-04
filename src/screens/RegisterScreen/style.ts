import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';
import { screenWidth } from '../../consts/consts';

export type RegisterScreenStyleType = {
  rootContainer: ViewStyle;
  input: TextStyle;
  loginTextContainer: TextStyle;
  loginText: TextStyle;
  inputsContainer: ViewStyle;
  buttonsContainer: ViewStyle;
};
export const styles = StyleSheet.create<RegisterScreenStyleType>({
  rootContainer: {
    height: '100%',
    width: screenWidth,
    position: 'relative',
  },
  input: {
    padding: 8,
    width: 200,
    borderRadius: 10,
    borderColor: COLORS.text.dark_blue,
    borderWidth: 2,
    textAlign: 'center',
    marginVertical: 10,
    color: COLORS.text.dark_blue,
  },
  loginTextContainer: {
    fontSize: 16,
    margin: 15,
  },
  loginText: { color: COLORS.text.dark_blue },
  inputsContainer: {
    position: 'absolute',
    top: 200,
    left: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});
