import { StyleSheet, ViewStyle } from 'react-native';

export type ModalInsideContainerStyleType = {
  modalInsideContainer: ViewStyle;
};

export const styles = StyleSheet.create<ModalInsideContainerStyleType>({
  modalInsideContainer: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
