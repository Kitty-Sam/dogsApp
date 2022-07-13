import { StyleSheet, TextStyle } from 'react-native';

export type ProfileScreenStyleType = {
  container: TextStyle;
};

export const styles = StyleSheet.create<ProfileScreenStyleType>({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 18,
  },
});
