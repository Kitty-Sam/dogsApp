import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

export type ShopContainerStyleType = {
  appButtonContainer: ViewStyle;
  appButtonText: TextStyle;
};

export const styles = StyleSheet.create<ShopContainerStyleType>({
  appButtonContainer: {
    width: '20%',
    borderColor: 'green',
    borderWidth: 2,
  },
  appButtonText: {
    textAlign: 'center',
    padding: 8,
  },
});
