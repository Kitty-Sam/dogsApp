import React, {ReactElement} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {AppButtonPropsType} from './type';
import {styles} from './style';

export const AppButton = (props: AppButtonPropsType): ReactElement => {
  const {onPress, title, disabled, backgroundColor = 'red'} = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.4}
      style={[
        styles.appButtonContainer,
        {
          backgroundColor: disabled ? 'green' : backgroundColor,
        },
      ]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
