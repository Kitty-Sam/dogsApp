import {StyleSheet, ViewStyle} from 'react-native';

export type UsefulInfoScreenStyleType = {
  chapterContainer: ViewStyle;
};

export const styles = StyleSheet.create<UsefulInfoScreenStyleType>({
  chapterContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
