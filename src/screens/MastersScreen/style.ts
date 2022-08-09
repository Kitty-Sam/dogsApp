import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type MastersScreenStyleType = {
  chapterContainer: ViewStyle;
};

export type CommonScreenStyleType = {
  addSectionContainer: ViewStyle;
  textSectionContainer: ViewStyle;
  text: TextStyle;
  textArticle: TextStyle;
  headerText: TextStyle;
  rootContainer: ViewStyle;
  emptyContainer: ViewStyle;
  emptyImageContainer: ImageStyle;
};
export const stylesCommon = StyleSheet.create<CommonScreenStyleType>({
  addSectionContainer: {
    width: 60,
    height: 50,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  textSectionContainer: {
    flexDirection: 'row',
  },
  text: {
    width: 200,
    textAlign: 'justify',
    color: COLORS.text.dark_blue,
  },
  textArticle: {
    textAlign: 'justify',
  },

  headerText: {
    margin: 16,
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.text.dark_blue,
  },
  rootContainer: {
    // flex: 1,
    margin: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImageContainer: {
    width: 300,
    height: 300,
    margin: 20,
    borderRadius: 20,
  },
});

export const styles = StyleSheet.create<MastersScreenStyleType>({
  chapterContainer: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
