import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type AddPetScreenStyleType = {
  rootContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  headerText: TextStyle;
  mainContainer: ViewStyle;
  imageContainer: ViewStyle;
  shortInputContainer: ViewStyle;
};

export const styles = StyleSheet.create<AddPetScreenStyleType>({
  rootContainer: {
    flex: 1,
    marginHorizontal: 24,
    marginVertical: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerText: {
    textAlign: 'center',
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: COLORS.text.grey,
    borderWidth: 1,
    marginTop: 20,
  },
  shortInputContainer: {
    width: '65%',
  },
});
