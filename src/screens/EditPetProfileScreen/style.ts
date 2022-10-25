import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type ProfileScreenStyleType = {
  root: TextStyle;
  listItemsContainer: TextStyle;
  fab: ViewStyle;
};

export const styles = StyleSheet.create<ProfileScreenStyleType>({
  root: {
    marginHorizontal: 12,
    flex: 1,
  },
  listItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 16,
    borderRadius: 10,
    backgroundColor: COLORS.background.light_violet,
  },
});
