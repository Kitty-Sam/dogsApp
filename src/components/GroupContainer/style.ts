import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';
import { screenWidth } from '../../consts/consts';

export type ItemContainerStyleType = {
  itemContainer: ViewStyle;
};

export const styles = StyleSheet.create<ItemContainerStyleType>({
  itemContainer: {
    borderRadius: 10,
    width: 150,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.buttons.violet,
  },
});
