import React, { FC } from 'react';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { ImageBackground, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native';
import { useInput } from '../../hooks/useInput';
import { COLORS } from '../../colors/colors';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { styles } from './style';
import { AppButton } from '../../components/Button/AppButton';
import { buttonsName } from '../../enum/buttonsName';
import { AuthNavigationName } from '../../enum/navigation';
import { ForgotPasswordScreenProps } from './type';
import { forgotPasswordAction } from '../../store/sagas/sagaActions/forgotPassword';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_buldog.jpeg');

export const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = props => {
  const { navigation } = props;
  const email = useInput('');
  const dispatch = useDispatch();

  const forgotPassword = (text: string) => {
    dispatch(forgotPasswordAction({ email, text, navigation }));
  };
  return (
    <ImageBackground style={styles.rootContainer} source={img}>
      <SafeAreaView style={styles.mainBlock}>
        <TextItemThin style={styles.noteText}>
          Enter your email and we will send you link for reset your old password
        </TextItemThin>
        <TextInput
          value={email.value}
          onChangeText={email.onChangeText}
          placeholderTextColor={COLORS.text.dark_blue}
          placeholder={inputsPlaceholdersName.EMAIL}
          style={styles.input}
        />
        <View style={styles.buttonsContainer}>
          <AppButton
            onPress={() => forgotPassword(email.value)}
            title={buttonsName.SEND}
            backgroundColor={COLORS.buttons.peach}
            disabled={email.value === ''}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate(AuthNavigationName.LOGIN)}
            activeOpacity={0.4}
            style={styles.textLogIn}
          >
            <TextItemThin>Try sign in</TextItemThin>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
