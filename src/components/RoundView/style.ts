import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type RoundViewStyleType = {
  text: TextStyle;
  contentContainer: ViewStyle;
};

export const styles = StyleSheet.create<RoundViewStyleType>({
  text: {
    color: 'white',
  },
  contentContainer: {
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.buttons.violet,
    margin: 10,
  },
});
