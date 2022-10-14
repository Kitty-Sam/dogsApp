import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';

export const Loader = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ActivityIndicator size="large" color={COLORS.buttons.violet} />
    </SafeAreaView>
  );
};
