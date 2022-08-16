import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type CalendarScreenStyleType = {
  closeText: TextStyle;
  titleText: TextStyle;
  itemContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  inputContainer: ViewStyle;
  modalContainer: ViewStyle;
  tasksContainer: ViewStyle;
  input: TextStyle;
};

export const styles = StyleSheet.create<CalendarScreenStyleType>({
  closeText: {
    position: 'absolute',
    top: 4,
    right: 8,
    zIndex: 100,
  },
  titleText: {
    padding: 20,
  },
  itemContainer: {
    width: 250,
    height: 100,
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 2,
    margin: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tasksContainer: {
    flexDirection: 'column',
  },
  input: {
    padding: 8,
    width: 200,
    borderRadius: 10,
    borderColor: COLORS.text.dark_blue,
    borderWidth: 2,
    textAlign: 'center',
    marginVertical: 10,
    color: COLORS.text.dark_blue,
  },
});
