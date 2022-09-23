import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../../utils/getDataBaseURL';
import { FavoriteSaveIdType, fetchFavoritePetsAC } from '../../actions/userAC';
import { put, select } from '@redux-saga/core/effects';
import { getCurrentUserId } from '../../selectors/loginSelector';

export function* fetchFavoritePetsIdsWorker() {
  try {
    const currentUserId: string = yield select(getCurrentUserId);

    if (currentUserId) {
      const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/users/${currentUserId}/favorites`);
      const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

      if (snapshot.val()) {
        const favoritesIds: FavoriteSaveIdType[] = Object.values(snapshot.val());
        yield put(fetchFavoritePetsAC(favoritesIds));
      } else {
        yield put(fetchFavoritePetsAC([]));
      }
    }
  } catch (error: any) {
    console.warn(error);
  }
}
