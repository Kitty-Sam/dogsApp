import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../../utils/getDataBaseURL';
import { put, select } from '@redux-saga/core/effects';
import { getCurrentUserId } from '../../selectors/loginSelector';
import { fetchPersonalPetsAC } from '../../actions/userAC';
import { PetType } from '../../reducers/userReducer';

export function* fetchPersonalPetsWorker() {
  try {
    const currentUserId: boolean = yield select(getCurrentUserId);
    const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/users/${currentUserId}/personalInfo`);
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');
    console.log('snapshot', snapshot);

    if (snapshot.val()) {
      const petsFB: PetType[] = Object.values(snapshot.val());
      console.log('petsFB', petsFB);
      yield put(fetchPersonalPetsAC(petsFB));
    }
  } catch (error: any) {
    console.warn(error);
  }
}
