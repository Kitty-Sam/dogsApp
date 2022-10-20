import { takeLatest } from '@redux-saga/core/effects';
import {
  ADD_NEW_MAP_MARK,
  ADD_NEW_PET,
  ADD_NEW_SERVICE,
  ADD_PERSONAL_PET,
  CALL_OWNER,
  FETCH_ALL_USERS,
  FETCH_FAVORITE_PETS_IDS,
  FETCH_MAP_MARKS,
  FETCH_PERSONAL_PETS,
  FETCH_SERVICES,
  FORGOT_PASSWORD,
  GOOGLE_REGISTER,
  GOOGLE_SIGN_IN,
  GOOGLE_SIGN_OUT,
  REMOVE_SERVICE,
} from '../sagasActionsTypes/sagasActionsType';

import { addNewPetWorker } from './addNewPetSaga';
import { fetchServicesWorker } from './fetchServicesSaga';
import { googleSignInWorker } from './googleSignInSaga';
import { googleSignOutWorker } from './googleSignOutSaga';
import { googleRegisterWorker } from './googleRegisterSaga';
import { fetchFavoritePetsIdsWorker } from './fetchFavoritesPetsIdsSaga';
import { addNewServiceWorker } from './addNewServiceSaga';
import { removeServiceWorker } from './removeServiceSaga';
import { callOwnerWorker } from './callOwnerSaga';
import { forgotPasswordWorker } from './forgotPasswordSaga';
import { addNewMapMarkWorker } from './addNewMapMarkSaga';
import { fetchMapMarksWorker } from './fetchMapMarksSaga';
import { addPersonalPetWorker } from './addPersonalPetSaga';
import { fetchPersonalPetsWorker } from './fetchPersonalPetsSaga';
import { fetchAllUsersWorker } from './fetchAllUsers';

export function* watchClickSaga() {
  yield takeLatest(GOOGLE_SIGN_IN, googleSignInWorker);
  yield takeLatest(GOOGLE_SIGN_OUT, googleSignOutWorker);
  yield takeLatest(ADD_NEW_PET, addNewPetWorker);
  yield takeLatest(ADD_NEW_SERVICE, addNewServiceWorker);
  yield takeLatest(REMOVE_SERVICE, removeServiceWorker);
  yield takeLatest(FETCH_FAVORITE_PETS_IDS, fetchFavoritePetsIdsWorker);
  yield takeLatest(FETCH_SERVICES, fetchServicesWorker);
  yield takeLatest(GOOGLE_REGISTER, googleRegisterWorker);
  yield takeLatest(CALL_OWNER, callOwnerWorker);
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordWorker);
  yield takeLatest(ADD_NEW_MAP_MARK, addNewMapMarkWorker);
  yield takeLatest(FETCH_MAP_MARKS, fetchMapMarksWorker);
  yield takeLatest(ADD_PERSONAL_PET, addPersonalPetWorker);
  yield takeLatest(FETCH_PERSONAL_PETS, fetchPersonalPetsWorker);
  yield takeLatest(FETCH_ALL_USERS, fetchAllUsersWorker);
}

export default function* rootSaga() {
  yield watchClickSaga();
}
