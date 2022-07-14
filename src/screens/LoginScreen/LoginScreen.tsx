import React, { useEffect } from 'react';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import { UserCredential } from '@firebase/auth';

export const LoginScreen = () => {
  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken);
      // const { user }: UserCredential = await auth().signInWithCredential(credential);
      // console.log('userCred', user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginHorizontal: 32 }}>
        <AppButton onPress={googleSignIn} title={'Google sign_in'} backgroundColor={'yellow'} />
      </View>
    </SafeAreaView>
  );
};
