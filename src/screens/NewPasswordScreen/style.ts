import { ImageStyle, StyleSheet, TextStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';
import { COLORS } from '../../colors/colors';

export type NewPasswordScreenStyleType = {
  rootContainer: ImageStyle;
  input: TextStyle;
};
export const styles = StyleSheet.create<NewPasswordScreenStyleType>({
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
});
