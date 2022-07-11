import {StyleSheet, ViewStyle} from 'react-native';

export type CustomSquareButtonStyleType = {
  squareButtonContainer: ViewStyle;
};

export const styles = StyleSheet.create<CustomSquareButtonStyleType>({
  squareButtonContainer: {
    width: 80,
    height: 80,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
});
