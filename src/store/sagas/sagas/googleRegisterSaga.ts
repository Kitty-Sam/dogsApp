import { put } from '@redux-saga/core/effects';

import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { UserCredential } from '@firebase/auth';
import { auth } from '../../../../firebase';
import { Alert } from 'react-native';
import { AuthNavigationName } from '../../../enum/navigation';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { GoogleRegisterType } from '../sagaActions/googleRegister';
import { saveCurrentUserAC } from '../../actions/loginAC';
import { images } from '../../../consts/consts';
import { database } from '../../../utils/getDataBaseURL';
import { sendEmail } from '../../../utils/sendMail';

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

    // yield sendEmailVerification(user, {
    //   handleCodeInApp: true,
    //   url: `https://dogs-8cdd1.firebaseapp.com`,
    // });
    //
    // Alert.alert('send message');

    // const res = yield applyActionCode(auth, actionCode);
    // console.log('res', res);
    yield sendEmail(`${userEmail.value}`, 'You join us!', 'Thank for being with us', {
      cc: 'user@domain.com; user2@domain.com; userx@domain1.com',
    });
    // Alert.alert()

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
    console.log(error.message);
    yield put(toggleAppStatus(requestStatus.FAILED));
  }
}
