import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';
import { COLORS } from '../../colors/colors';
import { CustomInputType } from './type';

export const CustomTextInput: FC<CustomInputType> = ({ iconPosition, icon, style, label, error, ...props }) => {
  const [focused, setFocused] = React.useState<boolean>(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return COLORS.background.dark_brown;
    }

    if (focused) {
      return COLORS.text.grey;
    } else {
      return COLORS.text.dark_blue;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? 'center' : 'baseline' },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};
