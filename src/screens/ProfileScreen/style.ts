import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';
import { COLORS } from '../../colors/colors';

export type ProfileScreenStyleType = {
  mainContainer: TextStyle;
  text: TextStyle;
  currentNameText: TextStyle;
  buttonsContainer: ViewStyle;
  textBlock: ViewStyle;
  rootContainer: ViewStyle;
  buttonContainer: ViewStyle;
  avatarContainer: ViewStyle;
};

export const styles = StyleSheet.create<ProfileScreenStyleType>({
  mainContainer: {
    height: '100%',
    width: screenWidth,
    position: 'relative',
  },
  currentNameText: { marginTop: 50 },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  text: {
    color: COLORS.text.dark_blue,
    fontSize: 16,
    borderBottomColor: COLORS.text.grey,
    borderBottomWidth: 1,
  },
  textBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rootContainer: {
    margin: 24,
  },
  buttonContainer: {
    width: '40%',
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
});
