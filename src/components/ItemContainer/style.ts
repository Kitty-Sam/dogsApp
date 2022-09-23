import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';
import { screenWidth } from '../../consts/consts';

export type ItemContainerStyleType = {
  itemContainer: ViewStyle;
  text: TextStyle;
  imageContainer: ImageStyle;
  closeText: TextStyle;
};

export const styles = StyleSheet.create<ItemContainerStyleType>({
  itemContainer: {
    borderColor: COLORS.text.dark_blue,
    borderWidth: 2,
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 16,
    borderRadius: 10,
    width: screenWidth * 0.7,
    height: screenWidth * 0.7,
  },
  text: {
    borderBottomColor: COLORS.text.dark_blue,
    borderBottomWidth: 1,
    margin: 4,
    fontSize: 24,
    color: COLORS.text.dark_blue,
  },
  imageContainer: {
    width: screenWidth * 0.25,
    height: screenWidth * 0.25,
    borderRadius: 10,
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
  closeText: {
    position: 'absolute',
    right: 18,
    top: 18,
    zIndex: 100,
  },
});
