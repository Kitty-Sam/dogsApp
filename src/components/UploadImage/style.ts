import { StyleSheet, ViewStyle } from 'react-native';

export type ImagePickerStyleType = {
  container: ViewStyle;
  uploadBtnContainer: ViewStyle;
  uploadBtn: ViewStyle;
  iconPosition: ViewStyle;
};

export const styles = StyleSheet.create<ImagePickerStyleType>({
  container: {
    elevation: 2,
    borderRadius: 30,
    overflow: 'hidden',
  },
  uploadBtnContainer: {
    flexDirection: 'row',
    opacity: 0.7,
    position: 'absolute',
    backgroundColor: 'lightgrey',
    width: 55,
    height: 40,
  },
  uploadBtn: {
    position: 'relative',
    top: 10,
  },
  iconPosition: {
    marginHorizontal: 4,
  },
});
