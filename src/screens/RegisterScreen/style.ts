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
    position: 'absolute',
    right: 24,
    top: 24,
  },
  inputsContainer: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
