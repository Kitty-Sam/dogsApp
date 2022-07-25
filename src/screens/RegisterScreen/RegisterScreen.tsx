import React, { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View, Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useNavigation } from '@react-navigation/native';
import { AuthNavigationName } from '../../enum/navigation';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { inputsPlaceholdersName } from '../../enum/inputPlaceholdersName';
import { buttonsName } from '../../enum/buttonsName';
import { styles } from './style';

export const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const registerPress = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigation.navigate(AuthNavigationName.LOGIN, { name: name });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
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
  );
};
