import { StyleSheet, ViewStyle } from 'react-native';

export type FavoriteScreenStyleType = {
  root: ViewStyle;
};

export const styles = StyleSheet.create<FavoriteScreenStyleType>({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
