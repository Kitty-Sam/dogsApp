import { database } from '../../../utils/getDataBaseURL';

import { put } from '@redux-saga/core/effects';
import { chaptersName } from '../../../enum/chapters';
import { addShopAC } from '../../actions/shopAC';
import { addClinicAC } from '../../actions/clinicAC';
import { addMasterAC } from '../../actions/masterAC';

export function* addNewServiceWorker({ payload }: any) {
  const { chapter, newService } = payload;
  try {
    if (chapter === chaptersName.SHOP) {
      database
        .ref(`/shops`)
        .child(`${newService.id}`)
        .set({ ...newService, chapter: chaptersName.SHOP });
      yield put(addShopAC({ ...newService, chapter: chaptersName.SHOP }));
    }
    if (chapter === chaptersName.CLINIC) {
      database
        .ref(`/clinics`)
        .child(`${newService.id}`)
        .set({ ...newService, chapter: chaptersName.CLINIC });
      yield put(addClinicAC({ ...newService, chapter: chaptersName.CLINIC }));
    }
    if (chapter === chaptersName.MASTER) {
      database
        .ref(`/masters`)
        .child(`${newService.id}`)
        .set({ ...newService, chapter: chaptersName.MASTER });
      yield put(addMasterAC({ ...newService, chapter: chaptersName.MASTER }));
    }
  } catch (error: any) {
    console.warn(error);
  }
}
