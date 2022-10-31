import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type LibraryImagesBlockStyleType = {
  fab: ViewStyle;
  root: ViewStyle;
  mainPhotoImage: ImageStyle;
  smallPhotoImage: ImageStyle;
  libraryContainer: ViewStyle;
  modalContainer: ViewStyle;
  mainModalBlock: ViewStyle;
};

export const styles = StyleSheet.create<LibraryImagesBlockStyleType>({
  root: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 24,
    borderRadius: 10,
    backgroundColor: COLORS.background.light_violet,
  },
  mainPhotoImage: {
    width: 300,
    height: 300,
    borderRadius: 50,
  },
  libraryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  smallPhotoImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    margin: 4,
  },
  modalContainer: {
    flex: 1,
  },
  mainModalBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
