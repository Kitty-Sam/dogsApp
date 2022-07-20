import React from 'react';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { SafeAreaView, View } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';

import { saveCurrentUserAC, toggleIsLoggedAC } from '../../store/actions/loginAC';
import { useDispatch } from 'react-redux';
import { database } from '../../utils/getDataBaseURL';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken);
      const { user }: any = await auth().signInWithCredential(credential);
      dispatch(toggleIsLoggedAC({ isLogged: true }));
      const { displayName, uid, email, photoURL } = user;

      dispatch(
        saveCurrentUserAC({ user: { currentUserId: uid, currentUserName: displayName, currentUserPhoto: photoURL } }),
      );

      await database
        .ref('/users/')
        .child(`${uid}`)
        .set({ userName: displayName, userEmail: email, userId: uid, photo: photoURL });
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
