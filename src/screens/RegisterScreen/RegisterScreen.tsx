import React, { FC, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { AuthNavigationName } from '../../enum/navigation';
import { AppButton } from '../../components/Button/AppButton';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { buttonsName } from '../../enum/buttonsName';
import { styles } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { RegisterScreenProps } from './type';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { useInput } from '../../hooks/useInput';
import { googleRegisterAction } from '../../store/sagas/sagaActions/googleRegister';
import { Icon } from '../../components/Icon/Icon';
import { iconsName } from '../../enum/iconsName';
import { requestStatus } from '../../store/reducers/appReducer';
import { TextInput } from 'react-native-paper';
import { Gap } from '../../components/Gap/Gap';
import * as yup from 'yup';
import { Loader } from '../../components/Loader/Loader';

export const RegisterScreen: FC<RegisterScreenProps> = props => {
  const { navigation } = props;
  const [error, setError] = useState<boolean>(false);

  const userEmail = useInput('');
  const userPassword = useInput('');
  const userName = useInput('');

  const dispatch = useDispatch();
  const statusApp = useSelector(getAppStatus);

  const registerPress = async () => {
    setError(false);
    try {
      const isValid = await formSchema.isValid(
        { name: userName.value, email: userEmail.value, password: userPassword.value },
        {
          abortEarly: false,
        },
      );

      if (isValid) {
        dispatch(googleRegisterAction({ userEmail, userName, userPassword, navigation }));
      } else {
        setError(true);
      }
    } catch (e) {
      console.log('не ok validation catch');
    }
  };

  const openLoginScreen = () => {
    navigation.navigate(AuthNavigationName.LOGIN);
  };
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);

  const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const borderColor = error ? 'red' : COLORS.text.grey;

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.root}>
      {statusApp === requestStatus.LOADING ? (
        <Loader />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.root}>
            <View style={styles.headerContainer}>
              <TextItemThin style={styles.headerText}>Get started</TextItemThin>
            </View>
            <View style={styles.inputsContainer}>
              <TouchableOpacity onPress={openLoginScreen} activeOpacity={0.4} style={styles.loginTextContainer}>
                <TextItemThin>Try sign in</TextItemThin>
              </TouchableOpacity>
              <TextInput
                label={inputsPlaceholdersName.NICK_NAME}
                mode="outlined"
                activeOutlineColor={borderColor}
                outlineColor={borderColor}
                contextMenuHidden={true}
                {...userName}
                theme={{ roundness: 10 }}
              />

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

              <TextItemThin style={styles.noteText}>By signing up you are agreeing to our</TextItemThin>
              <TextItemThin style={styles.noteText}>Terms and Conditions</TextItemThin>
              <View style={styles.buttonsContainer}>
                <AppButton
                  onPress={registerPress}
                  title={buttonsName.REGISTER}
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
