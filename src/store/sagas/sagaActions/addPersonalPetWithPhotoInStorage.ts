import { ADD_PERSONAL_PET_WITH_PHOTO } from '../sagasActionsTypes/sagasActionsType';

export type AddPersonalPetWithPhotoPayloadType = {
  nickName: string;
  breed: string;
  description: string;
  chip_id: string;
  // photo: string;
  about?: string;
  currentUserId: string;
  date: Date;
  stack: string;
  navigation: any;
};

export const addPersonalPetWithPhotoAction = (
  payload: AddPersonalPetWithPhotoPayloadType,
): AddPersonalPetWithPhotoActionType => ({
  type: ADD_PERSONAL_PET_WITH_PHOTO,
  payload,
});

export type AddPersonalPetWithPhotoActionType = {
  type: typeof ADD_PERSONAL_PET_WITH_PHOTO;
  payload: AddPersonalPetWithPhotoPayloadType;
};
