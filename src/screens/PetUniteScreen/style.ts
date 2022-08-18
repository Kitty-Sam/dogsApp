import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';

export type PetUniteScreenStyleType = {
  rootContainer: ViewStyle;
  imageContainer: ViewStyle;
  image: ImageStyle;
  buttonContainer: ViewStyle;
  buttonWithIconContainer: ViewStyle;
  textContainer: TextStyle;
  informativeBlock: ViewStyle;
  adoptionButtonContainer: ViewStyle;
  favoriteIcon: ViewStyle;
};

export const styles = StyleSheet.create<PetUniteScreenStyleType>({
  rootContainer: {
    flex: 1,
  },
  adoptionButtonContainer: { position: 'absolute', left: 18, top: 18, zIndex: 10 },
  imageContainer: {
    alignItems: 'center',
  },
  favoriteIcon: { margin: 10 },
  image: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.9,
    marginTop: 10,
    borderRadius: 20,
  },
  buttonContainer: {
    width: '80%',
  },
  buttonWithIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textContainer: {
    width: screenWidth * 0.5,
  },
  informativeBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: screenWidth,
    marginVertical: 24,
    height: screenWidth * 0.5,
  },
});
