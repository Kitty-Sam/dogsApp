import { ImageStyle, StyleSheet, TextStyle } from 'react-native';

export type ProfileScreenStyleType = {
  headerText: TextStyle;
  imageBackgroundContainer: ImageStyle;
};

export const styles = StyleSheet.create<ProfileScreenStyleType>({
  headerText: {
    fontWeight: 'bold',
    marginVertical: 8,
  },
  imageBackgroundContainer: {
    flex: 1,
    alignItems: 'stretch',
    padding: 16,
  },
});
