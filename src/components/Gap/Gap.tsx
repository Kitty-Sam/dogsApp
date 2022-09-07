import React, { FC } from 'react';
import { View } from 'react-native';

export type GapPropsType = {
  size: number;
};

export const Gap: FC<GapPropsType> = ({ size }) => {
  return <View style={{ height: 10 * size }}></View>;
};
