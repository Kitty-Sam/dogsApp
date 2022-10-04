import { StyleSheet, ViewStyle } from 'react-native';

export type UsefulServiceScreenStyleType = {
  root: ViewStyle;
};

export const styles = StyleSheet.create<UsefulServiceScreenStyleType>({
  root: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-around',
    justifyContent: 'space-evenly',
  },
});
