import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';
import { COLORS } from '../../colors/colors';

export type ImageBackgroundStyleType = {
  headerText: TextStyle;
  textContainer: ViewStyle;
  text: TextStyle;
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
    headerText: {
      fontWeight: 'bold',
      color: COLORS.text.dark_blue,
      position: 'absolute',
      top: 100,
      right: 20,
      fontSize: 26,
    },
    textContainer: {
      width: 200,
      height: 100,
      margin: 20,
    },
    text: {
      fontWeight: 'bold',
      color: COLORS.text.dark_blue,
      position: 'absolute',
      top: 200,
      left: 30,
      fontSize: 16,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 70,
      left: 70,
    },
  });
};
