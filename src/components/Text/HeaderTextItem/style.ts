import { StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../../colors/colors';

export type HeaderTextItemStyleType = {
  text: TextStyle;
};

export const styles = StyleSheet.create<HeaderTextItemStyleType>({
  text: {
    fontWeight: 'bold',
    color: COLORS.text.dark_blue,
    fontSize: 26,
  },
});
