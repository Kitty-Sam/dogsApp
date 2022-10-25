import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '../../colors/colors';

export type PetUniteScreenStyleType = {
  fab: ViewStyle;
  root: ViewStyle;
  noteBlock: ViewStyle;
  roundViewContainer: ViewStyle;
  activityBlock: ViewStyle;
  image: ImageStyle;
  mainBlock: ViewStyle;
};
export const styles = StyleSheet.create<PetUniteScreenStyleType>({
  root: {
    margin: 24,
  },
  mainBlock: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 400,
    borderRadius: 10,
    backgroundColor: COLORS.background.light_violet,
  },
  noteBlock: {
    width: 350,
    minHeight: 400,
    backgroundColor: '#efe9f5',
    borderRadius: 50,
    padding: 24,
  },
  roundViewContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  activityBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 200,
    height: 200,
  },
});
