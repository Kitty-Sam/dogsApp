import React, { FC } from 'react';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
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
import { TextInput } from 'react-native-paper';
import { Gap } from '../../components/Gap/Gap';
import { screenWidth } from '../../consts/consts';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = props => {
  const { navigation } = props;
  const email = useInput('');
  const dispatch = useDispatch();

  const forgotPassword = (text: string) => {
    dispatch(forgotPasswordAction({ email, text, navigation }));
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <View
            style={{
              width: screenWidth,
              height: 60,
              backgroundColor: COLORS.background.light_pink,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TextItemThin style={{ fontSize: 22 }}>Reset password</TextItemThin>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(AuthNavigationName.LOGIN)}
            activeOpacity={0.4}
            style={styles.textLogIn}
          >
            <TextItemThin>Try sign in</TextItemThin>
          </TouchableOpacity>
          <View style={styles.mainBlock}>
            <TextInput
              label={inputsPlaceholdersName.EMAIL}
              mode="outlined"
              activeOutlineColor={COLORS.text.grey}
              contextMenuHidden={true}
              {...email}
              theme={{ roundness: 10 }}
            />
            <TextItemThin style={{ fontSize: 14, margin: 10 }}>
              Please, enter the e-mail, that you used for logging in
            </TextItemThin>
            <Gap size={1} />
            <View style={styles.buttonsContainer}>
              <AppButton
                onPress={() => forgotPassword(email.value)}
                title={buttonsName.SEND}
                backgroundColor={COLORS.buttons.violet}
                disabled={email.value === ''}
              />
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
