import React, { FC, useState } from 'react';
import {
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
import { TextInput } from 'react-native-paper';
import { Gap } from '../../components/Gap/Gap';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';
import { getLoginError } from '../../store/selectors/loginSelector';
import { Loader } from '../../components/Loader/Loader';

export const LoginScreen: FC<LoginScreenProps> = props => {
  const { navigation } = props;
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const errorServer = useSelector(getLoginError);

  const userEmail = useInput('');
  const userPassword = useInput('');

  const dispatch = useDispatch();

  const statusApp = useSelector(getAppStatus);

  const formSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const signIn = async () => {
    setError(false);
    try {
      const isValid = await formSchema.isValid(
        { email: userEmail.value, password: userPassword.value },
        {
          abortEarly: false,
        },
      );

      if (isValid) {
        dispatch(googleSignInAction({ navigation, userPassword, userEmail }));
      } else {
        setError(true);
      }
    } catch (e) {}
  };

  const openRegisterScreen = () => {
    navigation.navigate(AuthNavigationName.REGISTER);
  };

  const borderColor = error || errorServer ? 'red' : COLORS.text.grey;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.root}>
      {statusApp === requestStatus.LOADING ? (
        <Loader />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.root}>
            <View style={styles.headerContainer}>
              <TextItemThin style={styles.headerText}>
                {error || errorServer ? 'Incorrect credentials' : 'Log in'}
              </TextItemThin>
            </View>
            <View style={styles.inputsContainer}>
              <TouchableOpacity onPress={() => navigation.navigate(AuthNavigationName.FORGOT_PASSWORD)}>
                <TextItemThin>Forgot password?</TextItemThin>
              </TouchableOpacity>
              <Gap size={1} />
              <TextInput
                label={inputsPlaceholdersName.EMAIL}
                mode="outlined"
                activeOutlineColor={borderColor}
                outlineColor={borderColor}
                contextMenuHidden={true}
                {...userEmail}
                theme={{ roundness: 10 }}
              />
              <Gap size={1} />
              <TextInput
                label={inputsPlaceholdersName.PASSWORD}
                mode="outlined"
                activeOutlineColor={borderColor}
                outlineColor={borderColor}
                contextMenuHidden={true}
                {...userPassword}
                theme={{ roundness: 10 }}
                style={{ color: borderColor }}
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
                <AppButton
                  onPress={openRegisterScreen}
                  title={buttonsName.REGISTER}
                  backgroundColor={COLORS.background.light_violet}
                />
                <AppButton
                  onPress={signIn}
                  title={error ? buttonsName.TRY_AGAIN : buttonsName.SIGN_IN}
                  backgroundColor={COLORS.buttons.violet}
                />
              </View>
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      )}
    </KeyboardAvoidingView>
  );
};
