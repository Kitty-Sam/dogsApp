import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type ClinicsScreenStyleType = {
  chapterContainer: ViewStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<ClinicsScreenStyleType>({
  chapterContainer: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'justify',
    marginHorizontal: 16,
  },
});
