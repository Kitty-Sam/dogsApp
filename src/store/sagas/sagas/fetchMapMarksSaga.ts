import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../../utils/getDataBaseURL';
import { put } from '@redux-saga/core/effects';
import { ItemType } from '../../reducers/mapMarksReducer';
import { fetchMapMarksAC } from '../../actions/mapMarksAC';

export function* fetchMapMarksWorker() {
  try {
    const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/mapMarks/`);
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

    if (snapshot.val()) {
      const mapMarksFB: ItemType[] = Object.values(snapshot.val());
      yield put(fetchMapMarksAC(mapMarksFB));
    }
  } catch (error: any) {
    console.warn(error);
  }
}
