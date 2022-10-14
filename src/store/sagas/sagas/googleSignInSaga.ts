import { put, select } from '@redux-saga/core/effects';

import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { signInWithEmailAndPassword, UserCredential } from '@firebase/auth';
import { auth } from '../../../../firebase';
import { saveLoginErrorAC, toggleIsLoggedAC } from '../../actions/loginAC';
import { Alert } from 'react-native';
import { AuthNavigationName } from '../../../enum/navigation';
import { GoogleSignInType } from '../sagaActions/googleSignIn';

import { getIsAddedAll } from '../../selectors/userSelector';

export function* googleSignInWorker({ payload }: GoogleSignInType) {
  const { navigation, userEmail, userPassword } = payload;
  yield put(toggleAppStatus(requestStatus.LOADING));
  yield put(saveLoginErrorAC({ error: '' }));
  try {
    const isAddedAll: boolean = yield select(getIsAddedAll);
    // @ts-ignore
    const userCredential: UserCredential = yield signInWithEmailAndPassword(auth, userEmail.value, userPassword.value);

    userEmail.resetValue();
    userPassword.resetValue();

    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    if (isAddedAll) {
      yield put(toggleIsLoggedAC({ isLogged: true }));
    } else {
      yield navigation.navigate(AuthNavigationName.ADD_PET);
    }
  } catch (error: any) {
    Alert.alert('register at first or check your credentials again');
    yield put(toggleAppStatus(requestStatus.FAILED));
    yield put(saveLoginErrorAC({ error: error.message }));
    navigation.navigate(AuthNavigationName.REGISTER);
  }
}
