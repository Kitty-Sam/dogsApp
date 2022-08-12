import { put } from '@redux-saga/core/effects';

import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { signInWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { auth } from '../../../../firebase';
import { toggleIsLoggedAC } from '../../actions/loginAC';
import { Alert } from 'react-native';
import { AuthNavigationName } from '../../../enum/navigation';
import { GoogleSignInType } from '../sagaActions/googleSignIn';

export function* googleSignInWorker({ payload }: GoogleSignInType) {
  const { navigation, userEmail, userPassword } = payload;
  yield put(toggleAppStatus(requestStatus.LOADING));
  try {
    // @ts-ignore
    const userCredential: UserCredential = yield signInWithEmailAndPassword(auth, userEmail.value, userPassword.value);

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
