import { StyleSheet, ViewStyle } from 'react-native';

export type UsersScreenStyleType = {
  container: ViewStyle;
};

export const styles = StyleSheet.create<UsersScreenStyleType>({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    // Shadows
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
