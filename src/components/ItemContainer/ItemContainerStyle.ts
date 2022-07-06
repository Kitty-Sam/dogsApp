import {StyleSheet, ViewStyle} from 'react-native';

export type ItemContainerStyleType = {
  itemContainer: ViewStyle;
};

export const styles = StyleSheet.create<ItemContainerStyleType>({
  itemContainer: {
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 4,
    borderRadius: 10,
    width: 200,
    height: 200,
  },
});
