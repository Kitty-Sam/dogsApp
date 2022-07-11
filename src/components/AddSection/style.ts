import {StyleSheet, ViewStyle} from 'react-native';

export type AddSectionStyleType = {
  modalContainer: ViewStyle;
};

export const styles = StyleSheet.create<AddSectionStyleType>({
  modalContainer: {
    borderColor: 'yellow',
    borderWidth: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 16,
    borderRadius: 20,
  },
});
