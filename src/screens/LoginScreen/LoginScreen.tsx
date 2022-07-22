import React from 'react';
import { AppButton } from '../../components/Button/CustomSquareButton';
import { SafeAreaView, View } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';

import { saveCurrentUserAC, toggleIsLoggedAC } from '../../store/actions/loginAC';
import { useDispatch } from 'react-redux';
import { database } from '../../utils/getDataBaseURL';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { ItemType } from '../../components/ItemContainer/type';

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(idToken);
      const { user }: any = await auth().signInWithCredential(credential);

      const { displayName, uid, email, photoURL } = user;

      dispatch(
        saveCurrentUserAC({ user: { currentUserId: uid, currentUserName: displayName, currentUserPhoto: photoURL } }),
      );

      const reference: FirebaseDatabaseTypes.Reference = await database.ref(`/users/`);
      const snapshot: FirebaseDatabaseTypes.DataSnapshot = await reference.once('value');
      if (snapshot.val()) {
        const values = snapshot.val();
        const users: any[] = Object.values(values);
        const currentUserInFb = users.find(el => el.userId === uid);

        if (!currentUserInFb) {
          await database
            .ref('/users/')
            .child(`${uid}`)
            .set({ userName: displayName, userEmail: email, userId: uid, photo: photoURL });
        }
      }
    } catch (error) {
      console.log(error);
    }
    dispatch(toggleIsLoggedAC({ isLogged: true }));
  };
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginHorizontal: 32 }}>
        <AppButton onPress={googleSignIn} title={'Google sign_in'} backgroundColor={'yellow'} />
      </View>
    </SafeAreaView>
  );
};
