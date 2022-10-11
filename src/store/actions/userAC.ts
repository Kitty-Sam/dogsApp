import { PetType } from '../reducers/userReducer';

export enum UserActions {
  ADD_PERSONAL_PET = 'add_personal_pet',
  FETCH_PERSONAL_PETS = 'fetch_personal_pets',
  IS_ADDED_ALL = 'is_added_all',
}

export type PayloadType = {
  isAddedAll: boolean;
};
//personal pet

export const addPersonalPetAC: AddPersonalPetActionType = (payload: PetType) => ({
  type: UserActions.ADD_PERSONAL_PET,
  payload,
});

export type AddPersonalPetActionType = (payload: PetType) => {
  payload: PetType;
  type: UserActions.ADD_PERSONAL_PET;
};

export const fetchPersonalPetsAC: FetchPersonalPetsActionType = (payload: PetType[]) => ({
  type: UserActions.FETCH_PERSONAL_PETS,
  payload,
});

export type FetchPersonalPetsActionType = (payload: PetType[]) => {
  payload: PetType[];
  type: UserActions.FETCH_PERSONAL_PETS;
};

export const toggleIsAddedPetsAC: ToggleIsAddedPetsActionType = (payload: PayloadType) => ({
  type: UserActions.IS_ADDED_ALL,
  payload,
});

export type ToggleIsAddedPetsActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: UserActions.IS_ADDED_ALL;
};
