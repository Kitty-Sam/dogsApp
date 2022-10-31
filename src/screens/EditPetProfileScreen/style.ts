import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export type EditPetProfileStyleType = {
  root: ViewStyle;
  mainBlock: ViewStyle;
  image: ImageStyle;
  buttonsContainer: ViewStyle;
};

export const styles = StyleSheet.create<EditPetProfileStyleType>({
  root: {
    margin: 24,
    flex: 1,
  },
  mainBlock: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
