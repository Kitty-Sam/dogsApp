import React from 'react';
import { ActivityIndicator, ImageBackground, TextInput, View } from 'react-native';
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_fat.jpeg');

export const LoginScreen = (props: LoginScreenProps) => {
  const { navigation } = props;

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

  return (
    <ImageBackground source={img} style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator style={{ zIndex: 10 }} />
      ) : (
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.text.grey}
            placeholder={inputsPlaceholdersName.EMAIL}
            {...userEmail}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={COLORS.text.grey}
            placeholder={inputsPlaceholdersName.PASSWORD}
            {...userPassword}
            secureTextEntry
          />
          <View style={styles.buttonsContainer}>
            <AppButton onPress={signIn} title={buttonsName.SIGN_IN} backgroundColor={COLORS.buttons.peach} />
            <AppButton
              onPress={openRegisterScreen}
              title={buttonsName.REGISTER}
              backgroundColor={COLORS.buttons.brown}
            />
          </View>
        </View>
      )}
    </ImageBackground>
  );
};
