import React, { useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationName } from '../../enum/navigation';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { buttonsName } from '../../enum/buttonsName';
import { styles } from './style';
import { toggleAppStatus } from '../../store/actions/appAC';
import { requestStatus } from '../../store/reducers/appReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAppStatus } from '../../store/selectors/appSelector';

export const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
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
      Alert.alert(error.message);
      dispatch(toggleAppStatus(requestStatus.FAILED));
    }
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      {statusApp === requestStatus.LOADING ? (
        <ActivityIndicator />
      ) : (
        <View style={styles.rootContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(AuthNavigationName.LOGIN)}
            activeOpacity={0.4}
            style={styles.loginText}
          >
            <Text>Try sign in</Text>
          </TouchableOpacity>
          <TextInput
            placeholder={inputsPlaceholdersName.NICK_NAME}
            value={name}
            onChangeText={text => setName(text)}
            style={styles.input}
          />
          <TextInput
            placeholder={inputsPlaceholdersName.EMAIL}
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder={inputsPlaceholdersName.PASSWORD}
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            // secureTextEntry
          />
          <AppButton onPress={registerPress} title={buttonsName.REGISTER} backgroundColor={'yellow'} />
        </View>
      )}
    </SafeAreaView>
  );
};
