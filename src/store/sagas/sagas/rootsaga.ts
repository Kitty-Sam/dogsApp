import { takeLatest } from '@redux-saga/core/effects';
import {
  ADD_NEW_PET,
  FETCH_PETS,
  FETCH_SERVICES,
  GOOGLE_REGISTER,
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
} from '../sagasActionsTypes/sagasActionsType';

import { addNewPetWorker } from './addNewPetSaga';
import { fetchPetsWorker } from './fetchPetsSaga';
import { fetchServicesWorker } from './fetchServicesSaga';
import { googleSignInWorker } from './googleSignInSaga';
import { googleSignOutWorker } from './googleSignOutSaga';
import { googleRegisterWorker } from './googleRegisterSaga';

export function* watchClickSaga() {
  yield takeLatest(GOOGLE_SIGN_IN, googleSignInWorker);
  yield takeLatest(GOOGLE_SIGN_OUT, googleSignOutWorker);
  yield takeLatest(ADD_NEW_PET, addNewPetWorker);
  yield takeLatest(FETCH_PETS, fetchPetsWorker);
  yield takeLatest(FETCH_SERVICES, fetchServicesWorker);
  yield takeLatest(GOOGLE_REGISTER, googleRegisterWorker);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
