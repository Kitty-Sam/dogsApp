import { StyleSheet, ViewStyle } from 'react-native';

export type ShopsScreenStyleType = {
  itemContainer: ViewStyle;
  emptyContainer: ViewStyle;
};

export const stylesCommon = StyleSheet.create<ShopsScreenStyleType>({
  itemContainer: {
    width: 200,
    height: 40,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 24,
    marginVertical: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
