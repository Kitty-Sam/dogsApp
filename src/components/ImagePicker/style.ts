import { StyleSheet, ViewStyle } from 'react-native';

export type ImagePickerStyleType = {
  container: ViewStyle;
  uploadBtnContainer: ViewStyle;
  uploadBtn: ViewStyle;
};

export const styles = StyleSheet.create<ImagePickerStyleType>({
  container: {
    elevation: 2,
    height: 300,
    width: 300,
    backgroundColor: '#efefef',
    borderRadius: 150,
    overflow: 'hidden',
  },
  uploadBtnContainer: {
    flexDirection: 'row',
    opacity: 0.7,
    position: 'absolute',
    left: 150,
    backgroundColor: 'lightgrey',
    width: '100%',
    height: '15%',
  },
  uploadBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
