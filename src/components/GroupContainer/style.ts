import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type ItemContainerStyleType = {
  itemContainer: ViewStyle;
};

export const styles = StyleSheet.create<ItemContainerStyleType>({
  itemContainer: {
    borderRadius: 10,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.buttons.violet,
  },
});
