import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../../utils/getDataBaseURL';
import { PetType } from '../../reducers/userReducer';
import { fetchPetsAC } from '../../actions/userAC';
import { put } from '@redux-saga/core/effects';

export function* fetchPetsWorker() {
  try {
    const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/pets/`);
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

    if (snapshot.val()) {
      const petsFB: PetType[] = Object.values(snapshot.val());
      yield put(fetchPetsAC(petsFB));
    }
  } catch (error: any) {
    console.warn(error);
  }
}
