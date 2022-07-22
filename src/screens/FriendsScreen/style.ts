import { StyleSheet, ViewStyle } from 'react-native';

export type FriendsScreenStyleType = {
  root: ViewStyle;
};

export const styles = StyleSheet.create<FriendsScreenStyleType>({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
