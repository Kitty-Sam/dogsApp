import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type MastersScreenStyleType = {
  chapterContainer: ViewStyle;
};

export type CommonScreenStyleType = {
  addSectionContainer: ViewStyle;
  emptyContainer: ViewStyle;
};
export const stylesCommon = StyleSheet.create<CommonScreenStyleType>({
  addSectionContainer: {
    width: 60,
    height: 50,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const styles = StyleSheet.create<MastersScreenStyleType>({
  chapterContainer: {
    flexGrow: 1,
  },
});
