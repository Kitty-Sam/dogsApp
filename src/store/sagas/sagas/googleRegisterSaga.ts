import { put } from '@redux-saga/core/effects';

import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { UserCredential } from '@firebase/auth';
import { auth } from '../../../../firebase';
import { Alert } from 'react-native';
import { AuthNavigationName } from '../../../enum/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { GoogleRegisterType } from '../sagaActions/googleRegister';
import { saveCurrentUserAC } from '../../actions/loginAC';
import { images } from '../../../consts/consts';
import { database } from '../../../utils/getDataBaseURL';

export function* googleRegisterWorker({ payload }: GoogleRegisterType) {
  const { userName, userPassword, userEmail, navigation } = payload;
  yield put(toggleAppStatus(requestStatus.LOADING));
  try {
    const userCredential: UserCredential = yield createUserWithEmailAndPassword(
      auth,
      userEmail.value,
      userPassword.value,
    );

    const { user } = userCredential;

    // yield user.sendEmailVerification();

    yield database.ref('/users/').child(`${user.uid}`).set({
      userName: userName.value,
      userEmail: userEmail.value,
      userId: user.uid,
      photo: images.avatar,
    });

    yield put(
      saveCurrentUserAC({
        user: {
          currentUserId: user.uid,
          currentUserName: userName.value,
          currentUserPhoto: images.avatar,
          currentUserEmail: userEmail.value,
        },
      }),
    );

    navigation.navigate(AuthNavigationName.LOGIN);
    yield put(toggleAppStatus(requestStatus.SUCCEEDED));
  } catch (error: any) {
    Alert.alert('Please, try again');
    yield put(toggleAppStatus(requestStatus.FAILED));
  }
}
