import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';

export type ImageBackgroundStyleType = {
  headerTextContainer: TextStyle;
  textContainer: ViewStyle;
  buttonContainer: ViewStyle;
  imageBackground: ImageStyle;
};

export const imageBackgroundStyles = () => {
  return StyleSheet.create<ImageBackgroundStyleType>({
    imageBackground: {
      height: '100%',
      width: screenWidth,
      position: 'relative',
    },
    headerTextContainer: {
      position: 'absolute',
      top: 100,
      right: 20,
    },
    textContainer: {
      width: 200,
      margin: 20,
      position: 'absolute',
      top: 200,
      left: 30,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 70,
      left: 70,
    },
  });
};
