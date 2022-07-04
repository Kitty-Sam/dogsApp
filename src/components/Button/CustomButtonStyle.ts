import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export type CustomButtonStyleType = {
  appButtonContainer: ViewStyle;
  appButtonText: TextStyle;
};

export const styles = StyleSheet.create<CustomButtonStyleType>({
  appButtonContainer: {
    elevation: 6,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginVertical: 6,
  },
  appButtonText: {
    fontSize: 16,
    padding: 8,
    fontWeight: 'normal',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
