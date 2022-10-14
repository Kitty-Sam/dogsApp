import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type LoaderStyleType = {
  root: ViewStyle;
};

export const styles = StyleSheet.create<LoaderStyleType>({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.background.light_pink },
});
