import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type RegisterScreenStyleType = {
  rootContainer: ViewStyle;
  input: TextStyle;
  loginText: TextStyle;
};
export const styles = StyleSheet.create<RegisterScreenStyleType>({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 100,
  },
  input: {
    padding: 8,
    width: 200,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 2,
    textAlign: 'center',
    marginVertical: 10,
  },
  loginText: {
    position: 'absolute',
    right: 24,
    top: 0,
  },
});
