import { StyleSheet, ViewStyle } from 'react-native';

export type ClinicsScreenStyleType = {
  chapterContainer: ViewStyle;
};

export const styles = StyleSheet.create<ClinicsScreenStyleType>({
  chapterContainer: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
