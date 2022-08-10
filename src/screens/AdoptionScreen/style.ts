import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';
import { screenWidth } from '../../consts/consts';

export type AdoptionScreenStyleType = {
  filterContainer: ViewStyle;
  listContainer: ViewStyle;
  iconContainer: ViewStyle;
  iconWithLabelContainer: ViewStyle;
};
export const styles = StyleSheet.create<AdoptionScreenStyleType>({
  filterContainer: {
    flexDirection: 'row',
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  listContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: COLORS.text.dark_blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: COLORS.buttons.peach,
  },
  iconWithLabelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
