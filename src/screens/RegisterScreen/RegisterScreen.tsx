import React, { FC, useState } from 'react';
import { ActivityIndicator, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
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
import { CustomTextInput } from '../../components/TextInput/CustomTextInput';
import { Icon } from '../../components/Icon/Icon';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_thin.jpeg');

export const RegisterScreen: FC<RegisterScreenProps> = props => {
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
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);

  return (
    <ImageBackground source={img} style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.inputsContainer}>
          <CustomTextInput placeholder={inputsPlaceholdersName.NICK_NAME} {...userName} contextMenuHidden={true} />
          <CustomTextInput placeholder={inputsPlaceholdersName.EMAIL} {...userEmail} contextMenuHidden={true} />
          <CustomTextInput
            placeholder={inputsPlaceholdersName.PASSWORD}
            {...userPassword}
            contextMenuHidden={true}
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
