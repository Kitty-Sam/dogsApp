import { database } from '../../../utils/getDataBaseURL';
import { addPetAC } from '../../actions/userAC';
import { DrawerNavigationName } from '../../../enum/navigation';

import { put } from '@redux-saga/core/effects';
import { AddNewPetActionType } from '../sagaActions/addNewPet';
import { animalsName } from '../../../enum/animalsName';

const catDefaultImg =
  'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';
const dogDefaultImg =
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*';

export function* addNewPetWorker({ payload }: AddNewPetActionType) {
  const { navigation, description, age, nickName, id, male, animal, setMale, setAnimal } = payload;
  try {
    yield database
      .ref(`/pets/`)
      .child(`${id}`)
      .set({
        male: male,
        animal: animal,
        age: age.value,
        description: description.value,
        nickName: nickName.value,
        id: id,
        photo: animal === animalsName.CAT ? catDefaultImg : dogDefaultImg,
      });
    yield put(
      addPetAC({
        male,
        animal,
        age: age.value,
        description: description.value,
        nickName: nickName.value,
        id,
        photo: animal === animalsName.CAT ? catDefaultImg : dogDefaultImg,
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
