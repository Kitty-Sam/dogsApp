import { database } from '../../../utils/getDataBaseURL';

import { put } from '@redux-saga/core/effects';
import { chaptersName } from '../../../enum/chapters';
import { removeShopAC } from '../../actions/shopAC';
import { removeClinicAC } from '../../actions/clinicAC';
import { removeMasterAC } from '../../actions/masterAC';

export function* removeServiceWorker({ payload }: any) {
  const { chapter, id } = payload;
  try {
    if (chapter === chaptersName.SHOP) {
      yield database.ref(`shops`).child(`${id}`).remove();
      yield put(removeShopAC({ id }));
    }
    if (chapter === chaptersName.CLINIC) {
      yield database.ref(`/clinics`).child(`${id}`).remove();
      yield put(removeClinicAC({ id }));
    }
    if (chapter === chaptersName.MASTER) {
      yield database.ref(`/masters`).child(`${id}`).remove();
      yield put(removeMasterAC({ id }));
    }
  } catch (error: any) {
    console.warn(error);
  }
}
