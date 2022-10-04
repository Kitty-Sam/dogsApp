import { StyleSheet, ViewStyle } from 'react-native';

export type ItemContainerStyleType = {
  commonInfoContainer: ViewStyle;
  feedBackContainer: ViewStyle;
};

export const styles = StyleSheet.create<ItemContainerStyleType>({
  commonInfoContainer: {
    padding: 24,
    height: '20%',
  },
  feedBackContainer: {
    borderTopLeftRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
    borderTopRightRadius: 25,
    padding: 24,
    height: '80%',
  },
});
