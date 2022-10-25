import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { RoundViewPropsType } from './type';

export const RoundView: FC<RoundViewPropsType> = props => {
  const { note, size } = props;
  return (
    <View style={[styles.contentContainer, { paddingHorizontal: size === 'small' ? 10 : 30 }]}>
      <Text style={styles.text}>{note}</Text>
    </View>
  );
};
