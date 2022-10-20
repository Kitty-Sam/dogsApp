import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type ListItemContainerStyleType = {
  container: ViewStyle;
  content: ViewStyle;
  row: ViewStyle;
  name: TextStyle;
  subTitle: TextStyle;
};

export const styles = StyleSheet.create<ListItemContainerStyleType>({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  content: {
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});
