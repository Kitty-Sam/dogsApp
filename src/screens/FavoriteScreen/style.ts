import { StyleSheet, ViewStyle } from 'react-native';

export type FavoriteScreenStyleType = {
  root: ViewStyle;
  listContainer: ViewStyle;
};

export const styles = StyleSheet.create<FavoriteScreenStyleType>({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  listContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
