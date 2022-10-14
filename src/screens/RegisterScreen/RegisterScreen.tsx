import React, { FC, useState } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
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
import { screenWidth } from '../../consts/consts';

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
              <TextItemThin style={{ fontSize: 22 }}>Get started</TextItemThin>
            </View>
            <View style={styles.inputsContainer}>
              <TouchableOpacity onPress={openLoginScreen} activeOpacity={0.4} style={styles.loginTextContainer}>
                <TextItemThin>Try sign in</TextItemThin>
              </TouchableOpacity>
              <TextInput
                label={inputsPlaceholdersName.NICK_NAME}
                mode="outlined"
                activeOutlineColor={COLORS.text.grey}
                contextMenuHidden={true}
                {...userName}
                theme={{ roundness: 10 }}
              />

              <Gap size={1} />
              <TextInput
                label={inputsPlaceholdersName.EMAIL}
                mode="outlined"
                activeOutlineColor={COLORS.text.grey}
                contextMenuHidden={true}
                {...userEmail}
                theme={{ roundness: 10 }}
              />
              <Gap size={1} />

              <TextInput
                label={inputsPlaceholdersName.PASSWORD}
                mode="outlined"
                activeOutlineColor={COLORS.text.grey}
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

              <TextItemThin style={{ fontSize: 12 }}>By signing up you are agreeing to our</TextItemThin>
              <TextItemThin style={{ fontSize: 12 }}>Terms and Conditions</TextItemThin>
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
