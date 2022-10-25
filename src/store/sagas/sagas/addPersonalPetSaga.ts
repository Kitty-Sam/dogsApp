import { database } from '../../../utils/getDataBaseURL';

import { put, select } from '@redux-saga/core/effects';
import { AddPersonalPetActionType } from '../sagaActions/addPersonalPet';
import { getCurrentUserId } from '../../selectors/loginSelector';
import { addPersonalPetAC } from '../../actions/userAC';

export function* addPersonalPetWorker({ payload }: AddPersonalPetActionType) {
  const { nickName, age, description, breed, chip_id, photo } = payload;
  try {
    const currentUserId: string = yield select(getCurrentUserId);
    yield database.ref(`/users/${currentUserId}/personalInfo/${nickName}`).set({
      nickName: nickName,
      age: age,
      description: description,
      breed: breed,
      chip_id: chip_id,
      photo: photo,
    });
    yield put(
      addPersonalPetAC({
        nickName: nickName,
        age: age,
        description: description,
        breed: breed,
        chip_id: chip_id,
        photo,
      }),
    );
  } catch (error: any) {
    console.warn(error);
  }
}
