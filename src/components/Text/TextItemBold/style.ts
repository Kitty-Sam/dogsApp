import { StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../../colors/colors';

export type TextItemBoldStyleType = {
  text: TextStyle;
};

export const styles = StyleSheet.create<TextItemBoldStyleType>({
  text: {
    fontWeight: 'bold',
    color: COLORS.text.dark_blue,
    fontSize: 16,
  },
});
