import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type UserItemStyleType = {
  textContainer: ViewStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<UserItemStyleType>({
  textContainer: {
    height: 50,
    width: 300,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    margin: 16,
  },
  text: { padding: 8 },
});
