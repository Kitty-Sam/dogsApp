import { StyleSheet, ViewStyle } from 'react-native';

export type ShopsScreenStyleType = {
  chapterContainer: ViewStyle;
};

export const styles = StyleSheet.create<ShopsScreenStyleType>({
  chapterContainer: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
