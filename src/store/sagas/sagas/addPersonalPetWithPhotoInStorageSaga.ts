import { AddPersonalPetWithPhotoActionType } from '../sagaActions/addPersonalPetWithPhotoInStorage';
import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { getGalleryImages } from '../../../utils/getImagesFromStore';
import { put } from '@redux-saga/core/effects';
import { addPersonalPetAction } from '../sagaActions/addPersonalPet';
import { getData } from '../../../utils/getData';
import { PetsNavigationName } from '../../../enum/navigation';
import { fetchPersonalPetsAction } from '../sagaActions/fetchPersonalPets';
import { toggleIsLoggedAC } from '../../actions/loginAC';
import { toggleIsAddedPetsAC } from '../../actions/userAC';

export function* addPersonalPetWithPhotoWorker({ payload }: AddPersonalPetWithPhotoActionType) {
  const { nickName, description, breed, chip_id, about, currentUserId, date, stack, navigation } = payload;
  try {
    yield put(toggleAppStatus(requestStatus.LOADING));
    const photoUrls: string[] = yield getGalleryImages('animals', nickName, currentUserId);
    const selectedPhotoUrl = photoUrls?.[0];

    if (selectedPhotoUrl) {
      yield put(
        addPersonalPetAction({
          nickName: nickName,
          description: description,
          breed: breed,
          age: getData(date),
          chip_id: chip_id,
          photo: selectedPhotoUrl,
          about: about,
        }),
      );
    }
    if (stack === 'Profile') {
      navigation.navigate(PetsNavigationName.PROFILE);
    } else {
      yield put(fetchPersonalPetsAction());
      yield put(toggleAppStatus(requestStatus.SUCCEEDED));
      yield put(toggleIsLoggedAC({ isLogged: true }));
      yield put(toggleIsAddedPetsAC({ isAddedAll: true }));
    }
  } catch (error: any) {
    console.warn(error);
  }
}
