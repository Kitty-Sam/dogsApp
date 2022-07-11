import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type MastersScreenStyleType = {
  chapterContainer: ViewStyle;
};

export type CommonScreenStyleType = {
  addSectionContainer: ViewStyle;
  textSectionContainer: ViewStyle;
  text: TextStyle;
  headerText: TextStyle;
  rootContainer: ViewStyle;
};
export const stylesCommon = StyleSheet.create<CommonScreenStyleType>({
  addSectionContainer: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 16,
    top: 8,
  },
  textSectionContainer: {
    flexDirection: 'row',
  },
  text: {
    width: 200,
    textAlign: 'justify',
  },
  headerText: {
    margin: 16,
    fontWeight: 'bold',
    fontSize: 24,
  },
  rootContainer: {
    flex: 1,
    margin: 16,
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
