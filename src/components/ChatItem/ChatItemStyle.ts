import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';

export type ChatItemStyleType = {
  chatItemContainer: ViewStyle;
  avatar: ImageStyle;
};

export const styles = StyleSheet.create<ChatItemStyleType>({
  chatItemContainer: {
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 4,
    borderRadius: 10,
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 8,
  },
});
