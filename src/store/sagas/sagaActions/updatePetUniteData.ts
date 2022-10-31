import { UPDATE_PET_UNITE_DATA } from '../sagasActionsTypes/sagasActionsType';

export type UpdatePetUniteDataPayloadType = {
  nickName: string;
  currentUserId: string;
  petName: string;
  date: Date;
  petColor: string;
  petChipId: string;
  petAbout: string;
  petBreed: string;
  image: string;
  navigation: any;
};

export const updatePetUniteDataAction = (payload: UpdatePetUniteDataPayloadType): updatePetUniteDataActionType => ({
  type: UPDATE_PET_UNITE_DATA,
  payload,
});

export type updatePetUniteDataActionType = {
  type: typeof UPDATE_PET_UNITE_DATA;
  payload: UpdatePetUniteDataPayloadType;
};
