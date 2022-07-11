import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export type ItemContainerStyleType = {
  itemContainer: ViewStyle;
  text: TextStyle;
  imageContainer: ImageStyle;
};

export const styles = StyleSheet.create<ItemContainerStyleType>({
  itemContainer: {
    borderColor: 'grey',
    borderWidth: 2,
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 16,
    borderRadius: 10,
    width: 300,
    height: 300,
  },
  text: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    margin: 4,
    fontSize: 24,
  },
  imageContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    position: 'absolute',
    bottom: 16,
    right: 16,
  },
});
