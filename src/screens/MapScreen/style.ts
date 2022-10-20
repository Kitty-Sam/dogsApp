import { ImageStyle, StyleSheet, ViewStyle } from 'react-native';

export type MapScreenStyleType = {
  root: ViewStyle;
  iconDrawer: ImageStyle;
  mapMarkContent: ViewStyle;
  mapMarkImageContainer: ViewStyle;
  mapMarkImage: ImageStyle;
};
export const styles = StyleSheet.create<MapScreenStyleType>({
  root: {
    flex: 1,
    position: 'relative',
  },
  iconDrawer: {
    position: 'absolute',
    zIndex: 110,
    top: 40,
    left: 24,
  },
  mapMarkContent: {
    height: 200,
  },
  mapMarkImageContainer: {
    position: 'absolute',
    right: 24,
    bottom: 120,
  },
  mapMarkImage: {
    width: 50,
    height: 50,
  },
});
