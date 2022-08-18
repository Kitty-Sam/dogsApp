import { takeLatest } from '@redux-saga/core/effects';
import {
  ADD_NEW_PET,
  ADD_NEW_SERVICE,
  CALL_OWNER,
  FETCH_FAVORITE_PETS_IDS,
  FETCH_PETS,
  FETCH_SERVICES,
  FORGOT_PASSWORD,
  GOOGLE_REGISTER,
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
  REMOVE_SERVICE,
} from '../sagasActionsTypes/sagasActionsType';

import { addNewPetWorker } from './addNewPetSaga';
import { fetchPetsWorker } from './fetchPetsSaga';
import { fetchServicesWorker } from './fetchServicesSaga';
import { googleSignInWorker } from './googleSignInSaga';
import { googleSignOutWorker } from './googleSignOutSaga';
import { googleRegisterWorker } from './googleRegisterSaga';
import { fetchFavoritePetsIdsWorker } from './fetchFavoritesPetsIdsSaga';
import { addNewServiceWorker } from './addNewServiceSaga';
import { removeServiceWorker } from './removeServiceSaga';
import { callOwnerWorker } from './callOwnerSaga';
import { forgotPasswordWorker } from './forgotPasswordSaga';

export function* watchClickSaga() {
  yield takeLatest(GOOGLE_SIGN_IN, googleSignInWorker);
  yield takeLatest(GOOGLE_SIGN_OUT, googleSignOutWorker);
  yield takeLatest(ADD_NEW_PET, addNewPetWorker);
  yield takeLatest(ADD_NEW_SERVICE, addNewServiceWorker);
  yield takeLatest(REMOVE_SERVICE, removeServiceWorker);
  yield takeLatest(FETCH_PETS, fetchPetsWorker);
  yield takeLatest(FETCH_FAVORITE_PETS_IDS, fetchFavoritePetsIdsWorker);
  yield takeLatest(FETCH_SERVICES, fetchServicesWorker);
  yield takeLatest(GOOGLE_REGISTER, googleRegisterWorker);
  yield takeLatest(CALL_OWNER, callOwnerWorker);
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordWorker);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
