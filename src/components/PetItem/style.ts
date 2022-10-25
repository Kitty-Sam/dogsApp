import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type PetItemStyleType = {
  itemPetContainer: ViewStyle;
  insideItemContainer: ViewStyle;
  imageBackGround: ViewStyle;
  imageBackGroundImage: ImageStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<PetItemStyleType>({
  itemPetContainer: {
    marginVertical: 12,
  },
  insideItemContainer: {
    margin: 8,
  },
  imageBackGround: {
    padding: 12,
    justifyContent: 'flex-start',
    width: 150,
    height: 150,
  },
  imageBackGroundImage: {
    borderRadius: 20,
  },
  text: {
    textTransform: 'capitalize',
    zIndex: 10,
    color: 'white',
  },
});
