import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';
import { screenWidth } from '../../consts/consts';

export type RegisterScreenStyleType = {
  loginTextContainer: TextStyle;
  inputsContainer: ViewStyle;
  buttonsContainer: ViewStyle;
};
export const styles = StyleSheet.create<RegisterScreenStyleType>({
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
