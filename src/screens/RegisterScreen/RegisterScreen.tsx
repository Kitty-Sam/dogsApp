import React, { useState } from 'react';
import { ActivityIndicator, Alert, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { AuthNavigationName } from '../../enum/navigation';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { buttonsName } from '../../enum/buttonsName';
import { styles } from './style';
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAppStatus } from '../../store/selectors/appSelector';
import { COLORS } from '../../colors/colors';
import { RegisterScreenProps } from './type';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require('../../assets/white_dog_thin.jpeg');

export const RegisterScreen = (props: RegisterScreenProps) => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const statusApp = useSelector(getAppStatus);

  const registerPress = async () => {
    dispatch(toggleAppStatus(requestStatus.LOADING));
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigation.navigate(AuthNavigationName.LOGIN, { name: name });
      dispatch(toggleAppStatus(requestStatus.SUCCEEDED));
    } catch (error: any) {
      Alert.alert('Please, try again');
      dispatch(toggleAppStatus(requestStatus.FAILED));
    }
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
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholderTextColor={COLORS.text.grey}
            placeholder={inputsPlaceholdersName.EMAIL}
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholderTextColor={COLORS.text.grey}
            placeholder={inputsPlaceholdersName.PASSWORD}
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <View style={styles.buttonsContainer}>
            <AppButton onPress={registerPress} title={buttonsName.REGISTER} backgroundColor={COLORS.buttons.peach} />
            <TouchableOpacity onPress={openLoginScreen} activeOpacity={0.4} style={styles.loginTextContainer}>
              <Text style={styles.loginText}>Try sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ImageBackground>
  );
};
