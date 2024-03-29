import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type ChatItemStyleType = {
  chatItemContainer: ViewStyle;
  avatar: ImageStyle;
};

export const styles = StyleSheet.create<ChatItemStyleType>({
  chatItemContainer: {
    borderColor: COLORS.text.black,
    borderWidth: 2,
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 4,
    borderRadius: 10,
    flexDirection: 'row',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginHorizontal: 8,
  },
});
