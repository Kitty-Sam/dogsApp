import { put } from '@redux-saga/core/effects';

import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { signInWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { auth } from '../../../../firebase';
import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../../utils/getDataBaseURL';
import { User } from '../../../screens/LoginScreen/type';
import { saveCurrentUserAC, toggleIsLoggedAC } from '../../actions/loginAC';
import { images } from '../../../consts/consts';
import { Alert } from 'react-native';
import { AuthNavigationName } from '../../../enum/navigation';
import { GoogleSignInType } from '../sagaActions/googleSignIn';

export function* googleSignInWorker({ payload }: GoogleSignInType) {
  const { route, navigation, userEmail, userPassword } = payload;
  yield put(toggleAppStatus(requestStatus.LOADING));
  try {
    // @ts-ignore
    const userCredential: UserCredential = yield signInWithEmailAndPassword(auth, userEmail.value, userPassword.value);
    const { uid, email } = userCredential.user;

    const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/users/`);
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

    if (snapshot.val()) {
      const values = snapshot.val();
      const users: User[] = Object.values(values);
      const currentUserInFb = users.find(el => el.userId === uid);

      if (currentUserInFb) {
        yield put(
          saveCurrentUserAC({
            user: {
              currentUserId: uid,
              currentUserName: currentUserInFb.userName,
              currentUserPhoto: images.avatar,
              currentUserEmail: email!,
            },
          }),
        );
      }

      if (!currentUserInFb) {
        yield database
          .ref('/users/')
          .child(`${uid}`)
          .set({ userName: route.params!.name, userEmail: email, userId: uid, photo: images.avatar });

        yield put(
          saveCurrentUserAC({
            user: {
              currentUserId: uid,
              currentUserName: route.params!.name!,
              currentUserPhoto: images.avatar,
              currentUserEmail: email!,
            },
          }),
        );
      }
    }
    userEmail.resetValue();
    userPassword.resetValue();

    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    yield put(toggleIsLoggedAC({ isLogged: true }));
  } catch (error: any) {
    const errorMessage = error.message;
    Alert.alert('register at first', errorMessage);
    yield put(toggleAppStatus(requestStatus.FAILED));
    navigation.navigate(AuthNavigationName.REGISTER);
  }
}
