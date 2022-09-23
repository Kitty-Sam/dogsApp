import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';
import { COLORS } from '../../colors/colors';

export type PetItemStyleType = {
  itemPetContainer: ViewStyle;
  itemPetText: TextStyle;
  image: ImageStyle;
  icon: TextStyle;
  textContainer: TextStyle;
  imageContainer: ViewStyle;
};

export const styles = StyleSheet.create<PetItemStyleType>({
  itemPetContainer: {
    width: screenWidth * 0.45,
    height: screenWidth * 0.6,
    borderColor: COLORS.text.dark_blue,
    borderWidth: 1,
    margin: 8,
    borderRadius: 40,
  },
  itemPetText: {
    color: COLORS.text.dark_blue,
  },
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.35,
    borderRadius: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  icon: {
    position: 'absolute',
    right: 18,
    bottom: 40,
  },
  textContainer: {
    justifyContent: 'flex-start',
    marginHorizontal: 24,
  },
});
