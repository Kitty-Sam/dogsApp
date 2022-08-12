import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type AddSectionStyleType = {
  modalContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  closeIcon: ViewStyle;
  imageContainer: ImageStyle;
  chapterText: TextStyle;
  input: TextStyle;
  modalCommonContainer: ViewStyle;
  modalInputBlock: ViewStyle;
};

const ios = Platform.OS === 'ios';

export const styles = StyleSheet.create<AddSectionStyleType>({
  modalContainer: {
    borderColor: COLORS.text.dark_blue,
    borderWidth: 1,
    marginHorizontal: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around',
  },
  closeIcon: {
    position: 'absolute',
    right: 16,
    top: 8,
    zIndex: 10,
    color: COLORS.text.dark_blue,
  },
  imageContainer: {
    width: 200,
    height: 100,
    borderRadius: 20,
  },
  chapterText: {
    color: COLORS.text.dark_blue,
    textAlign: 'left',
    margin: 18,
    marginTop: 8,
    fontSize: 18,
    textTransform: 'capitalize',
  },
  modalCommonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalInputBlock: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: COLORS.text.dark_blue,
  },
  input: {
    borderColor: COLORS.text.dark_blue,
    margin: 8,
    borderWidth: 1,
    width: '80%',
    borderRadius: 10,
    padding: ios ? 10 : 8,
  },
});
