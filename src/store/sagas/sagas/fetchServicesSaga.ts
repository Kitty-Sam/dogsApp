import { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { database } from '../../../utils/getDataBaseURL';
import { put } from '@redux-saga/core/effects';
import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { ItemType } from '../../../components/ItemContainer/type';
import { fetchClinicsAC } from '../../actions/clinicAC';
import { chaptersName } from '../../../enum/chapters';
import { fetchShopsAC } from '../../actions/shopAC';
import { fetchMastersAC } from '../../actions/masterAC';
import { fetchServicesActionType } from '../sagaActions/fetchServices';

export function* fetchServicesWorker({ payload }: fetchServicesActionType) {
  const { chapter } = payload;
  try {
    yield put(toggleAppStatus(requestStatus.LOADING));
    const reference: FirebaseDatabaseTypes.Reference = yield database.ref(`/${chapter}s`);
    const snapshot: FirebaseDatabaseTypes.DataSnapshot = yield reference.once('value');

    if (snapshot.val()) {
      const values = snapshot.val();
      const data: ItemType[] = Object.values(values);
      yield put(
        chapter === chaptersName.CLINIC
          ? fetchClinicsAC(data)
          : chapter === chaptersName.SHOP
          ? fetchShopsAC(data)
          : fetchMastersAC(data),
      );
      yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    } else {
      const emptyArray: ItemType[] = [];
      yield put(
        chapter === chaptersName.CLINIC
          ? fetchClinicsAC(emptyArray)
          : chapter === chaptersName.SHOP
          ? fetchShopsAC(emptyArray)
          : fetchMastersAC(emptyArray),
      );
      yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    }
  } catch (error: any) {
    console.warn(error);
  }
}
