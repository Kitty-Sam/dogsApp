import { database } from '../../../utils/getDataBaseURL';
import { addPetAC } from '../../actions/userAC';
import { DrawerNavigationName } from '../../../enum/navigation';

import { put } from '@redux-saga/core/effects';
import { AddNewPetActionType } from '../sagaActions/addNewPet';

export function* addNewPetWorker({ payload }: AddNewPetActionType) {
  const { navigation, description, age, nickName, id, male, animal, setMale, setAnimal, ownerInfo, photo } = payload;
  try {
    yield database.ref(`/pets/`).child(`${id}`).set({
      male: male,
      animal: animal,
      age: age.value,
      description: description.value,
      nickName: nickName.value,
      ownerInfo: ownerInfo.value,
      id: id,
      photo: photo,
    });
    yield put(
      addPetAC({
        male,
        animal,
        age: age.value,
        description: description.value,
        nickName: nickName.value,
        ownerInfo: ownerInfo.value,
        id,
        photo: photo,
      }),
    );
    navigation.navigate(DrawerNavigationName.ADOPTION_STACK);
    setMale('');
    setAnimal('');
    description.resetValue();
    age.resetValue();
    nickName.resetValue();
  } catch (error: any) {
    console.warn(error);
  }
}
