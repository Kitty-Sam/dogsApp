import { StyleSheet, ViewStyle } from 'react-native';

export type AddSectionStyleType = {
  modalContainer: ViewStyle;
};

export const styles = StyleSheet.create<AddSectionStyleType>({
  modalContainer: {
    borderColor: 'grey',
    borderWidth: 2,
    marginHorizontal: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 150,
    padding: 16,
    borderRadius: 20,
  },
});
