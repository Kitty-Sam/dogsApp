import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthNavigationName } from '../../enum/navigation';
import { AppButton } from '../../components/Button/AppButton';
import { styles } from './style';
import { buttonsName } from '../../enum/buttonsName';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { requestStatus } from '../../store/reducers/appReducer';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { LoginScreenProps } from './type';
import { useInput } from '../../hooks/useInput';
import { googleSignInAction } from '../../store/sagas/sagaActions/googleSignIn';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { Icon } from '../../components/Icon/Icon';
import { iconsName } from '../../enum/iconsName';
import { getLoginError } from '../../store/selectors/loginSelector';
import { TextInput } from 'react-native-paper';
import { Gap } from '../../components/Gap/Gap';

export const LoginScreen: FC<LoginScreenProps> = props => {
  const { navigation } = props;
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);

  const userEmail = useInput('');
  const userPassword = useInput('');

  const dispatch = useDispatch();

  const statusApp = useSelector(getAppStatus);

  const signIn = () => {
    dispatch(googleSignInAction({ navigation, userPassword, userEmail }));
  };

  const openRegisterScreen = () => {
    navigation.navigate(AuthNavigationName.REGISTER);
  };

  const error = useSelector(getLoginError);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate(AuthNavigationName.FORGOT_PASSWORD)}>
              <TextItemThin>Forgot password?</TextItemThin>
            </TouchableOpacity>
            <Gap size={1} />
            <TextInput
              label={inputsPlaceholdersName.EMAIL}
              mode="outlined"
              activeOutlineColor={COLORS.text.grey}
              contextMenuHidden={true}
              {...userEmail}
            />
            <Gap size={1} />
            <TextInput
              label={inputsPlaceholdersName.PASSWORD}
              mode="outlined"
              activeOutlineColor={COLORS.text.grey}
              contextMenuHidden={true}
              {...userPassword}
              right={
                <TextInput.Icon
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}
                  name={() => (
                    <Icon
                      type={'ionicon'}
                      name={isSecureEntry ? iconsName.EYE_OFF : iconsName.EYE}
                      size={16}
                      color={COLORS.text.grey}
                    />
                  )}
                />
              }
              secureTextEntry={isSecureEntry}
            />
            <Gap size={1} />

            <View style={styles.buttonsContainer}>
              <AppButton onPress={signIn} title={buttonsName.SIGN_IN} backgroundColor={COLORS.buttons.peach} />
              <AppButton
                onPress={openRegisterScreen}
                title={buttonsName.REGISTER}
                backgroundColor={COLORS.buttons.brown}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </KeyboardAvoidingView>
  );
};
