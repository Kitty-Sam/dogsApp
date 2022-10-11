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
        <View style={styles.mainBlock}>
          <TextItemThin style={styles.noteText}>
            Enter your email and we will send you link for reset your old password
          </TextItemThin>
          {/*<CustomTextInput placeholder={inputsPlaceholdersName.EMAIL} contextMenuHidden={true} {...email} />*/}
          <TextInput
            label={inputsPlaceholdersName.EMAIL}
            mode="outlined"
            activeOutlineColor={COLORS.text.grey}
            contextMenuHidden={true}
            {...email}
          />
          <Gap size={1} />
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
