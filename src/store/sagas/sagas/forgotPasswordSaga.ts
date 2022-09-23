import { put } from '@redux-saga/core/effects';

import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { sendPasswordResetEmail } from '@firebase/auth';
import { auth } from '../../../../firebase';
import { Alert } from 'react-native';
import { AuthNavigationName } from '../../../enum/navigation';
import { forgotPasswordActionType } from '../sagaActions/forgotPassword';

export function* forgotPasswordWorker({ payload }: forgotPasswordActionType) {
  const { email, text, navigation } = payload;
  yield put(toggleAppStatus(requestStatus.LOADING));
  try {
    // @ts-ignore
    yield sendPasswordResetEmail(auth, text, null);
    Alert.alert('check your email ' + text);
    email.resetValue();
    navigation.navigate(AuthNavigationName.LOGIN);
  } catch (e) {
    console.warn(e);
  }
}
