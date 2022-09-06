import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type DonationScreenStyleType = {
  sumItem: TextStyle;
  input: TextStyle;
  buttonsContainer: ViewStyle;
  cardField: TextStyle;
  sumItemContainer: ViewStyle;
  root: ViewStyle;
};

export const styles = StyleSheet.create<DonationScreenStyleType>({
  root: { flex: 1, paddingTop: 20, paddingHorizontal: 16 },
  sumItem: {
    width: 100,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
    paddingTop: 15,
  },
  sumItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  input: {
    borderBottomColor: COLORS.text.dark_blue,
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 20,
    textTransform: 'uppercase',
  },
  cardField: {
    width: '100%',
    height: 50,
    marginVertical: 20,
  },
});
