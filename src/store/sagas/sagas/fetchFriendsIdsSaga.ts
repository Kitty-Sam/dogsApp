import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../../utils/getDataBaseURL';
import { put, select } from '@redux-saga/core/effects';
import { getCurrentUserId } from '../../selectors/loginSelector';
import { fetchFriendsIdsAC } from '../../actions/userAC';

export function* fetchFriendsIdsWorker() {
  try {
    const currentUserId: string = yield select(getCurrentUserId);

    if (currentUserId) {
      const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/users/${currentUserId}/friends`);
      const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

      if (snapshot.val()) {
        const friendsIds: string[] = Object.values(snapshot.val());

        yield put(fetchFriendsIdsAC({ ids: friendsIds }));
      } else {
        yield put(fetchFriendsIdsAC({ ids: [] }));
      }
    }
  } catch (error: any) {
    console.warn(error);
  }
}
