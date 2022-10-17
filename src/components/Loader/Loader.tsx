import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '../../colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { TextItemThin } from '../Text/TextItemThin/TextItemThin';
import { Gap } from '../Gap/Gap';

export type LoaderPropsType = {
  text?: string;
};

export const Loader: FC<LoaderPropsType> = props => {
  const { text } = props;
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={COLORS.buttons.violet} />
      </View>
      <Gap size={1} />
      <TextItemThin>{text}</TextItemThin>
    </SafeAreaView>
  );
};
