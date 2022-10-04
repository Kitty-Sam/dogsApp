import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';
import { screenWidth } from '../../consts/consts';

export type ItemContainerStyleType = {
  itemContainer: ViewStyle;
};

export const styles = StyleSheet.create<ItemContainerStyleType>({
  itemContainer: {
    borderColor: COLORS.text.dark_blue,
    borderWidth: 2,
    borderRadius: 10,
    width: screenWidth * 0.35,
    height: screenWidth * 0.35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
