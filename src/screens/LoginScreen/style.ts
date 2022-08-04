import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';
import { COLORS } from '../../colors/colors';

export type LoginScreenStyleType = {
  rootContainer: ImageStyle;
  input: TextStyle;
  buttonsContainer: ViewStyle;
  inputsContainer: ViewStyle;
};
export const styles = StyleSheet.create<LoginScreenStyleType>({
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
  buttonsContainer: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
  },
  inputsContainer: {
    position: 'absolute',
    top: 250,
    left: 100,
  },
});
