import { StyleSheet, ViewStyle } from 'react-native';

export type ChatScreenStyleType = {
  chatContainer: ViewStyle;
  titleContainer: ViewStyle;
};

export const styles = StyleSheet.create<ChatScreenStyleType>({
  chatContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  titleContainer: {
    width: 200,
    height: 50,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
