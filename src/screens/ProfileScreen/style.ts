import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { screenWidth } from '../../consts/consts';
import { COLORS } from '../../colors/colors';

export type ProfileScreenStyleType = {
  container: TextStyle;
  headerText: TextStyle;
  mainHeaderText: TextStyle;
  userNameText: TextStyle;
  text: TextStyle;
  buttonsContainer: ViewStyle;
  textBlock: ViewStyle;
};

export const styles = StyleSheet.create<ProfileScreenStyleType>({
  container: {
    height: '100%',
    width: screenWidth,
    position: 'relative',
  },
  headerText: {
    color: COLORS.text.dark_blue,
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  text: {
    color: COLORS.text.dark_blue,
    fontSize: 16,
    fontStyle: 'italic',
  },
  textBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainHeaderText: {
    color: COLORS.text.dark_blue,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  userNameText: { color: COLORS.text.dark_blue, fontSize: 16, marginTop: 50 },
});
