import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';
import { COLORS } from '../../colors/colors';

export type LoginScreenStyleType = {
  buttonsContainer: ViewStyle;
  inputsContainer: ViewStyle;
  headerContainer: ViewStyle;
  root: ViewStyle;
  headerText: TextStyle;
};
export const styles = StyleSheet.create<LoginScreenStyleType>({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputsContainer: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    width: screenWidth,
    height: 60,
    backgroundColor: COLORS.background.light_pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    flex: 1,
  },
  headerText: {
    fontSize: 22,
  },
});
