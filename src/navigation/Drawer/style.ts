import { ImageStyle, StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

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
    flexDirection: 'row',
    margin: 24,
  },
});
