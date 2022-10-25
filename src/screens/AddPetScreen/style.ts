import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type AddPetScreenStyleType = {
  rootContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  headerText: TextStyle;
  mainContainer: ViewStyle;
  imageContainer: ImageStyle;
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
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: COLORS.text.grey,
    borderWidth: 1,
    marginTop: 20,
    zIndex: 1,
  },
  shortInputContainer: {
    width: '65%',
  },
});
