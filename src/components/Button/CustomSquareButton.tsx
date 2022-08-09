import React, { ReactElement } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AppButtonPropsType } from './type';
import { styles } from './style';
import { COLORS } from '../../colors/colors';

export const AppButton = (props: AppButtonPropsType): ReactElement => {
  const { onPress, title, disabled, backgroundColor = 'red' } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.4}
      style={[
        styles.appButtonContainer,
        {
          backgroundColor: disabled ? COLORS.text.grey : backgroundColor,
        },
      ]}
    >
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
