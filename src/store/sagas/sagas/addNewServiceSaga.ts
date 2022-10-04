import { database } from '../../../utils/getDataBaseURL';

import { put } from '@redux-saga/core/effects';
import { chaptersName } from '../../../enum/chapters';
import { addShopAC } from '../../actions/shopAC';
import { addClinicAC } from '../../actions/clinicAC';
import { addMasterAC } from '../../actions/masterAC';
import { addPetSitterAC } from '../../actions/petSitterAC';
import { addGroomerAC } from '../../actions/groomerAC';
import { addTrainerAC } from '../../actions/trainerAC';
import { addDogFriendlyAC } from '../../actions/dogFriendlyAC';
import { AddNewServiceActionType } from '../sagaActions/addNewService';

export function* addNewServiceWorker({ payload }: AddNewServiceActionType) {
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
    if (chapter === chaptersName.PET_SITTER) {
      database
        .ref(`/petSitters`)
        .child(`${newService.id}`)
        .set({ ...newService, chapter: chaptersName.PET_SITTER });
      yield put(addPetSitterAC({ ...newService, chapter: chaptersName.PET_SITTER }));
    }
    if (chapter === chaptersName.GROOMER) {
      database
        .ref(`/groomers`)
        .child(`${newService.id}`)
        .set({ ...newService, chapter: chaptersName.GROOMER });
      yield put(addGroomerAC({ ...newService, chapter: chaptersName.GROOMER }));
    }
    if (chapter === chaptersName.TRAINER) {
      database
        .ref(`/trainers`)
        .child(`${newService.id}`)
        .set({ ...newService, chapter: chaptersName.TRAINER });
      yield put(addTrainerAC({ ...newService, chapter: chaptersName.TRAINER }));
    }
    if (chapter === chaptersName.DOG_FRIENDLY) {
      database
        .ref(`/dogFriendlys`)
        .child(`${newService.id}`)
        .set({ ...newService, chapter: chaptersName.DOG_FRIENDLY });
      yield put(addDogFriendlyAC({ ...newService, chapter: chaptersName.DOG_FRIENDLY }));
    }
  } catch (error: any) {
    console.warn(error);
  }
}
