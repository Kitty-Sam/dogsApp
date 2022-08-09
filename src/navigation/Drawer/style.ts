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
    borderRadius: 20,
    margin: 16,
    borderWidth: 1,
    borderColor: COLORS.text.dark_blue,
  },
  userNameTextContainer: {
    marginVertical: 60,
    marginTop: 50,
  },
  logOutText: {
    flexDirection: 'row',
    margin: 24,
  },
});
