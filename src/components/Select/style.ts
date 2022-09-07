import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type SelectShelterStyleType = {
  button: ViewStyle;
};

export const styles = StyleSheet.create<SelectShelterStyleType>({
  button: { borderRadius: 10, borderColor: COLORS.text.grey, borderWidth: 1, width: 200 },
});
