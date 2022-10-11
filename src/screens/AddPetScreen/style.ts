import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type AddPetScreenStyleType = {
  rootContainer: ViewStyle;
  filterContainer: ViewStyle;
  filterItemContainer: ViewStyle;
  input: TextStyle;
  textLocation: TextStyle;
  buttonsContainer: ViewStyle;
};

export const styles = StyleSheet.create<AddPetScreenStyleType>({
  rootContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 24,
    // alignItems: 'center',
    // justifyContent: 'space-between',
  },
  filterContainer: {
    flexDirection: 'row',
  },
  filterItemContainer: {
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
    margin: 4,
  },
  buttonsContainer: {
    // marginTop: 100,
    flexDirection: 'row',
    // width: 300,
    justifyContent: 'flex-end',
  },
  input: {
    borderBottomColor: COLORS.text.grey,
    borderBottomWidth: 2,
    width: 300,
    padding: 10,
    color: COLORS.text.dark_blue,
  },
  textLocation: {
    textAlign: 'center',
    paddingVertical: 8,
  },
});
