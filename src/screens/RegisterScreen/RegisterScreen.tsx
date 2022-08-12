import React from 'react';
import { ActivityIndicator, ImageBackground, TextInput, TouchableOpacity, View } from 'react-native';
import { AuthNavigationName } from '../../enum/navigation';
import { AppButton } from '../../components/Button/AppButton';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { buttonsName } from '../../enum/buttonsName';
import { styles } from './style';
import { requestStatus } from '../../store/reducers/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { RegisterScreenProps } from './type';
import { TextItemThin } from '../../components/Text/TextItemThin/TextItemThin';
import { useInput } from '../../hooks/useInput';
import { googleRegisterAction } from '../../store/sagas/sagaActions/googleRegister';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_thin.jpeg');

export const RegisterScreen = (props: RegisterScreenProps) => {
  const { navigation } = props;

  const userEmail = useInput('');
  const userPassword = useInput('');
  const userName = useInput('');

  const dispatch = useDispatch();
  const statusApp = useSelector(getAppStatus);

  const registerPress = () => {
    dispatch(googleRegisterAction({ userEmail, userName, userPassword, navigation }));
  };

  const openLoginScreen = () => {
    navigation.navigate(AuthNavigationName.LOGIN);
  };

  return (
    <ImageBackground source={img} style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator style={{ zIndex: 10 }} />
      ) : (
        <View style={styles.inputsContainer}>
          <TextInput
            placeholderTextColor={COLORS.text.grey}
            placeholder={inputsPlaceholdersName.NICK_NAME}
            style={styles.input}
            {...userName}
          />
          <TextInput
            placeholderTextColor={COLORS.text.grey}
            placeholder={inputsPlaceholdersName.EMAIL}
            style={styles.input}
            {...userEmail}
          />
          <TextInput
            placeholderTextColor={COLORS.text.grey}
            placeholder={inputsPlaceholdersName.PASSWORD}
            style={styles.input}
            {...userPassword}
            secureTextEntry
          />
          <View style={styles.buttonsContainer}>
            <AppButton onPress={registerPress} title={buttonsName.REGISTER} backgroundColor={COLORS.buttons.peach} />
            <TouchableOpacity onPress={openLoginScreen} activeOpacity={0.4} style={styles.loginTextContainer}>
              <TextItemThin>Try sign in</TextItemThin>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};
