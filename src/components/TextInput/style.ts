import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors/colors';

export default StyleSheet.create({
  wrapper: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  inputContainer: {
    paddingVertical: 10,
  },

  textInput: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
  },

  error: {
    color: COLORS.background.dark_brown,
    paddingTop: 4,
    fontSize: 12,
  },
});
