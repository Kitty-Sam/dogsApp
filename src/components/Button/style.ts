import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

type AppButtonStyleType = {
  appButtonContainer: ViewStyle;
  appButtonText: TextStyle;
};

export const styles = StyleSheet.create<AppButtonStyleType>({
  appButtonContainer: {
    elevation: 6,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginVertical: 6,
  },
  appButtonText: {
    fontSize: 16,
    fontWeight: 'normal',
    alignSelf: 'center',
    // textTransform: 'uppercase',
    color: COLORS.text.white,
  },
});
