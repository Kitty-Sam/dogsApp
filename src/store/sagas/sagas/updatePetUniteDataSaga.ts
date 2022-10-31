import { put } from '@redux-saga/core/effects';

import { toggleAppStatus } from '../../actions/appAC';
import { requestStatus } from '../../reducers/appReducer';
import { PetsNavigationName } from '../../../enum/navigation';
import { getGalleryImages } from '../../../utils/getImagesFromStore';
import { fetchPersonalPetsAction } from '../sagaActions/fetchPersonalPets';
import { database } from '../../../utils/getDataBaseURL';
import { getData } from '../../../utils/getData';
import { updatePetUniteDataActionType } from '../sagaActions/updatePetUniteData';

export function* updatePetUniteDataWorker({ payload }: updatePetUniteDataActionType) {
  const { nickName, currentUserId, petName, date, petColor, petChipId, petAbout, petBreed, image, navigation } =
    payload;
  try {
    yield put(toggleAppStatus(requestStatus.LOADING));
    const photoUrls: string[] = yield getGalleryImages('animals', nickName, currentUserId);
    const selectedPhotoUrl = photoUrls?.[0];
    if (selectedPhotoUrl) {
      yield database.ref(`/users/${currentUserId}/personalInfo/${petName}`).update({
        nickName: petName,
        age: getData(date),
        description: petColor,
        breed: petBreed,
        chip_id: petChipId,
        photo: selectedPhotoUrl,
        about: petAbout,
      });
      navigation.navigate(PetsNavigationName.PET_UNITE, {
        nickName: petName,
        age: getData(date),
        description: petColor,
        breed: petBreed,
        chip_id: petChipId,
        photo: image,
        about: petAbout,
      });
      yield put(fetchPersonalPetsAction());
      yield put(toggleAppStatus(requestStatus.SUCCEEDED));
    }
  } catch (e) {
    console.warn(e);
  }
}
