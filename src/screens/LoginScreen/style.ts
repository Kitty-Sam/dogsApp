import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';

export type LoginScreenStyleType = {
  rootContainer: ImageStyle;
  buttonsContainer: ViewStyle;
  inputsContainer: ViewStyle;
};
export const styles = StyleSheet.create<LoginScreenStyleType>({
  rootContainer: {
    height: '100%',
    width: screenWidth,
    position: 'relative',
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
