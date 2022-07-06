import {StyleSheet, ViewStyle} from 'react-native';

export type AddSectionStyleType = {
  modalContainer: ViewStyle;
};

export const styles = StyleSheet.create<AddSectionStyleType>({
  modalContainer: {
    borderColor: 'green',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
});
