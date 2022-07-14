import React, { useEffect } from 'react';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { View } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import { UserCredential } from '@firebase/auth';

export const LoginScreen = () => {
  useEffect(() => {
    GoogleSignin.configure({});
  });
  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      console.log('idToken', idToken);
      const credential = auth.GoogleAuthProvider.credential(idToken);
      const { user }: UserCredential = await auth().signInWithCredential(credential);
      console.log('idToken', idToken);
      console.log('userCred', user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <AppButton onPress={googleSignIn} title={'Google signIn'} />
    </View>
  );
};
