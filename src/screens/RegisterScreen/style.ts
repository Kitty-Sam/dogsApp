import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';
import { screenWidth } from '../../consts/consts';

export type RegisterScreenStyleType = {
  input: TextStyle;
  loginTextContainer: TextStyle;
  inputsContainer: ViewStyle;
  buttonsContainer: ViewStyle;
};
export const styles = StyleSheet.create<RegisterScreenStyleType>({
  input: {
    padding: 8,
    width: 200,
    borderRadius: 10,
    borderColor: COLORS.text.dark_blue,
    borderWidth: 2,
    textAlign: 'center',
    marginVertical: 10,
    color: COLORS.text.dark_blue,
    backfaceVisibility: 'visible',
  },
  loginTextContainer: {
    fontSize: 16,
    margin: 16,
  },
  inputsContainer: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
