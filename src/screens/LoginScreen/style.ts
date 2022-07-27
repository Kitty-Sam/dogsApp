import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type LoginScreenStyleType = {
  rootContainer: ViewStyle;
  input: TextStyle;
  buttonsContainer: ViewStyle;
};
export const styles = StyleSheet.create<LoginScreenStyleType>({
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
  buttonsContainer: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-between',
  },
});
