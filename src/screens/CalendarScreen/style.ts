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
  textContainer: TextStyle;
  rootContainer: ViewStyle;
  headerContainer: TextStyle;
  dateTextContainer: ViewStyle;
  agenda: ViewStyle;
  noteContainer: ViewStyle;
  textNote: TextStyle;
  dateText: TextStyle;
};

export const styles = StyleSheet.create<CalendarScreenStyleType>({
  rootContainer: { flex: 1 },
  headerContainer: { justifyContent: 'center', alignItems: 'center' },
  dateTextContainer: {
    marginHorizontal: 18,
    fontSize: 28,
    borderRadius: 10,
    borderColor: COLORS.text.grey,
    borderWidth: 1,
    padding: 4,
  },
  dateText: { marginHorizontal: 10, borderBottomWidth: 1, borderBottomColor: COLORS.text.dark_blue },
  agenda: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteContainer: {},
  textNote: { margin: 10 },
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
  textContainer: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
