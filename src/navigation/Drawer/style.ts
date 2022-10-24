import { ImageStyle, StyleSheet, TextStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type CustomDrawerStyleType = {
  avatarContainer: ImageStyle;
  userNameTextContainer: TextStyle;
  logOutText: TextStyle;
};

export const styles = StyleSheet.create<CustomDrawerStyleType>({
  avatarContainer: {
    height: 70,
    width: 70,
    borderRadius: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.text.dark_blue,
  },
  userNameTextContainer: {
    margin: 18,
  },
  logOutText: {
    flexDirection: 'row',
    margin: 16,
  },
});
