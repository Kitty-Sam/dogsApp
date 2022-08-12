import { put } from '@redux-saga/core/effects';

import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { UserCredential } from '@firebase/auth';
import { auth } from '../../../../firebase';
import { Alert } from 'react-native';
import { AuthNavigationName } from '../../../enum/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { GoogleRegisterType } from '../sagaActions/googleRegister';

export function* googleRegisterWorker({ payload }: GoogleRegisterType) {
  const { userName, userPassword, userEmail, navigation } = payload;
  yield put(toggleAppStatus(requestStatus.LOADING));
  try {
    const userCredential: UserCredential = yield createUserWithEmailAndPassword(
      auth,
      userEmail.value,
      userPassword.value,
    );
    const user = userCredential.user;
    navigation.navigate(AuthNavigationName.LOGIN, { name: userName.value });
    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
  } catch (error: any) {
    Alert.alert('Please, try again');
    yield put(toggleAppStatus(requestStatus.FAILED));
  }
}
