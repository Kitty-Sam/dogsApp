import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type AddPetScreenStyleType = {
  rootContainer: ViewStyle;
  filterContainer: ViewStyle;
  filterItemContainer: ViewStyle;
  input: TextStyle;
  filterText: TextStyle;
  buttonsContainer: ViewStyle;
};
export const styles = StyleSheet.create<AddPetScreenStyleType>({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterItemContainer: {
    width: 100,
    borderWidth: 2,
    borderRadius: 10,
    margin: 4,
  },
  filterText: {
    textAlign: 'center',
    paddingVertical: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
  },
  input: { borderBottomColor: COLORS.text.grey, borderBottomWidth: 2, width: 300, padding: 10, margin: 5 },
});
