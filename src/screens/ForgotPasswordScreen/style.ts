import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';
import { COLORS } from '../../colors/colors';

export type ForgotPasswordScreenStyleType = {
  rootContainer: ImageStyle;
  input: TextStyle;
  textLogIn: TextStyle;
  mainBlock: ViewStyle;
  buttonsContainer: ViewStyle;
};
export const styles = StyleSheet.create<ForgotPasswordScreenStyleType>({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
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
  mainBlock: {
    alignItems: 'center',
    marginTop: screenWidth * 0.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: screenWidth * 0.4,
    justifyContent: 'space-around',
  },
  textLogIn: {
    margin: 12,
  },
});
