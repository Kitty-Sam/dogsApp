import { StyleSheet, ViewStyle } from 'react-native';

export type ClinicsScreenStyleType = {
  chapterContainer: ViewStyle;
};

export const styles = StyleSheet.create<ClinicsScreenStyleType>({
  chapterContainer: {
    flexGrow: 1,
  },
});
