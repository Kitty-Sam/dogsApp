import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
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
import { CustomTextInput } from '../../components/TextInput/CustomTextInput';
import { Icon } from '../../components/Icon/Icon';
import { iconsName } from '../../enum/iconsName';
import { requestStatus } from '../../store/reducers/appReducer';
import { TextInput } from 'react-native-paper';
import { Gap } from '../../components/Gap/Gap';

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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputsContainer}>
            <TextInput
              label={inputsPlaceholdersName.NICK_NAME}
              mode="outlined"
              activeOutlineColor={COLORS.text.grey}
              contextMenuHidden={true}
              {...userName}
            />
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
              <AppButton onPress={registerPress} title={buttonsName.REGISTER} backgroundColor={COLORS.buttons.peach} />
              <TouchableOpacity onPress={openLoginScreen} activeOpacity={0.4} style={styles.loginTextContainer}>
                <TextItemThin>Try sign in</TextItemThin>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </KeyboardAvoidingView>
  );
};
