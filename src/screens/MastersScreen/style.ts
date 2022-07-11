import {StyleSheet, ViewStyle} from 'react-native';

export type MastersScreenStyleType = {
  chapterContainer: ViewStyle;
};

export const styles = StyleSheet.create<MastersScreenStyleType>({
  chapterContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
