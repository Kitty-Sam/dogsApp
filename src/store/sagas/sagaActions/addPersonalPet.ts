import { ADD_PERSONAL_PET } from '../sagasActionsTypes/sagasActionsType';

export type AddPersonalPetPayloadType = {
  nickName: string;
  breed: string;
  age: string;
  description: string;
  chip_id: string;
  photo: string;
  about?: string;
};

export const addPersonalPetAction = (payload: AddPersonalPetPayloadType): AddPersonalPetActionType => ({
  type: ADD_PERSONAL_PET,
  payload,
});

export type AddPersonalPetActionType = {
  type: typeof ADD_PERSONAL_PET;
  payload: AddPersonalPetPayloadType;
};
