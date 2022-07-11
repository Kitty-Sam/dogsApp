import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export type CustomDrawerStyleType = {
  avatarContainer: ImageStyle;
  userNameText: TextStyle;
  logOutText: TextStyle;
};

export const styles = StyleSheet.create<CustomDrawerStyleType>({
  avatarContainer: {
    height: 80,
    width: 80,
    borderRadius: 20,
    margin: 16,
  },
  userNameText: {
    marginHorizontal: 16,
    marginBottom: 60,
  },
  logOutText: {
    margin: 16,
  },
});
