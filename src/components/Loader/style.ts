import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type LoaderStyleType = {
  root: ViewStyle;
  loaderContainer: ViewStyle;
};

export const styles = StyleSheet.create<LoaderStyleType>({
  root: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.background.light_pink },
  loaderContainer: {
    width: 70,
    height: 70,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.background.light_violet,
    backgroundColor: COLORS.background.light_pink,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
