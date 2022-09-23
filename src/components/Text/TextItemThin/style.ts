import { StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../../colors/colors';

export type TextItemThinStyleType = {
  text: TextStyle;
};

export const styles = StyleSheet.create<TextItemThinStyleType>({
  text: {
    color: COLORS.text.dark_blue,
    fontSize: 16,
  },
});
