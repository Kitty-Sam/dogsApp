import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../../utils/getDataBaseURL';
import { put } from '@redux-saga/core/effects';
import { fetchAllUsersAC, UserType } from '../../actions/userAC';
import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';

export function* fetchAllUsersWorker() {
  try {
    yield put(toggleAppStatus(requestStatus.LOADING));
    const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/users/`);
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

    if (snapshot.val()) {
      const usersFB: UserType[] = Object.values(snapshot.val());
      yield put(fetchAllUsersAC(usersFB));
      yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    }
  } catch (error: any) {
    yield put(toggleAppStatus(requestStatus.FAILED));
    console.warn(error);
  }
}
