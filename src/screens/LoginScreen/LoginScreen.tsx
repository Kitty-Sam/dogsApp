import React, { FC, useState } from 'react';
import { ActivityIndicator, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
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
import { CustomTextInput } from '../../components/TextInput/CustomTextInput';
import { Icon } from '../../components/Icon/Icon';
import { iconsName } from '../../enum/iconsName';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_fat.jpeg');

export const LoginScreen: FC<LoginScreenProps> = props => {
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
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);

  return (
    <ImageBackground source={img} style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator style={{ zIndex: 10 }} />
      ) : (
        <View style={styles.inputsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate(AuthNavigationName.FORGOT_PASSWORD)}>
            <TextItemThin>Forgot password?</TextItemThin>
          </TouchableOpacity>

          <CustomTextInput placeholder={inputsPlaceholdersName.EMAIL} contextMenuHidden={true} {...userEmail} />

          <CustomTextInput
            placeholder={inputsPlaceholdersName.PASSWORD}
            {...userPassword}
            iconPosition="right"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}
              >
                <Text>
                  {isSecureEntry ? (
                    <Icon type={'ionicon'} name={'eye'} size={16} color={COLORS.text.grey} />
                  ) : (
                    <Icon type={'ionicon'} name={'eye-off'} size={16} color={COLORS.text.grey} />
                  )}
                </Text>
              </TouchableOpacity>
            }
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
