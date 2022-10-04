import { database } from '../../../utils/getDataBaseURL';

import { put } from '@redux-saga/core/effects';
import { chaptersName } from '../../../enum/chapters';
import { removeShopAC } from '../../actions/shopAC';
import { removeClinicAC } from '../../actions/clinicAC';
import { removeMasterAC } from '../../actions/masterAC';
import { removePetSitterAC } from '../../actions/petSitterAC';
import { removeGroomerAC } from '../../actions/groomerAC';
import { removeTrainerAC } from '../../actions/trainerAC';
import { removeDogFriendlyAC } from '../../actions/dogFriendlyAC';
import { RemoveServiceActionType } from '../sagaActions/removeService';

export function* removeServiceWorker({ payload }: RemoveServiceActionType) {
  const { id, chapter } = payload;
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
    if (chapter === chaptersName.PET_SITTER) {
      yield database.ref(`/petSitters`).child(`${id}`).remove();
      yield put(removePetSitterAC({ id }));
    }
    if (chapter === chaptersName.GROOMER) {
      yield database.ref(`/groomers`).child(`${id}`).remove();
      yield put(removeGroomerAC({ id }));
    }
    if (chapter === chaptersName.TRAINER) {
      yield database.ref(`/trainers`).child(`${id}`).remove();
      yield put(removeTrainerAC({ id }));
    }
    if (chapter === chaptersName.DOG_FRIENDLY) {
      yield database.ref(`/dogFriendlys`).child(`${id}`).remove();
      yield put(removeDogFriendlyAC({ id }));
    }
  } catch (error: any) {
    console.warn(error);
  }
}
