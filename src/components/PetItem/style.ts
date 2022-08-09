import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';
import { COLORS } from '../../colors/colors';

export type PetItemStyleType = {
  itemPetContainer: ViewStyle;
  itemPetText: TextStyle;
};

export const styles = StyleSheet.create<PetItemStyleType>({
  itemPetContainer: {
    width: screenWidth * 0.45,
    height: screenWidth * 0.6,
    borderColor: COLORS.text.dark_blue,
    borderWidth: 1,
    margin: 8,
    borderRadius: 50,
  },
  itemPetText: {
    color: COLORS.text.dark_blue,
  },
});
