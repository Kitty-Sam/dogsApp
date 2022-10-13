import { StyleSheet, ViewStyle } from 'react-native';

export type LoginScreenStyleType = {
  buttonsContainer: ViewStyle;
  inputsContainer: ViewStyle;
};
export const styles = StyleSheet.create<LoginScreenStyleType>({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  inputsContainer: {
    padding: 24,
    flex: 1,
    justifyContent: 'center',
  },
});
