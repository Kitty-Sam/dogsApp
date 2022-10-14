import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';
import { screenWidth } from '../../consts/consts';

export type RegisterScreenStyleType = {
  loginTextContainer: TextStyle;
  inputsContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  headerContainer: ViewStyle;
  noteText: TextStyle;
  headerText: TextStyle;
  root: ViewStyle;
};
export const styles = StyleSheet.create<RegisterScreenStyleType>({
  root: { flex: 1 },

  loginTextContainer: {
    fontSize: 16,
    position: 'absolute',
    right: 24,
    top: 16,
  },
  inputsContainer: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerContainer: {
    width: screenWidth,
    height: 60,
    backgroundColor: COLORS.background.light_pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteText: {
    fontSize: 12,
  },
  headerText: {
    fontSize: 22,
  },
});
