import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type AddSectionStyleType = {
  modalContainer: ViewStyle;
  buttonsContainer: ViewStyle;
  closeIcon: ViewStyle;
  imageContainer: ImageStyle;
  chapterText: TextStyle;
  modalCommonContainer: ViewStyle;
  modalInputBlock: ViewStyle;
};

export const styles = StyleSheet.create<AddSectionStyleType>({
  modalContainer: {
    borderColor: 'grey',
    borderWidth: 2,
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
  },
  imageContainer: {
    width: 200,
    height: 100,
    borderRadius: 20,
  },
  chapterText: {
    textAlign: 'left',
    marginHorizontal: 18,
    marginTop: 8,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
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
  },
});
