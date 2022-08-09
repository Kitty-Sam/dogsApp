import { PetType } from '../reducers/userReducer';

export type FetchPersonalInfoPayloadType = {
  petName: string;
  petAge: string;
  petHobbies: string;
};

export enum UserActions {
  FETCH_PERSONAL_INFO = 'fetch_personal_info',
  FETCH_PETS = 'fetch_pets',
  ADD_PET = 'add_pet',
}

export const fetchPersonalInfoAC: FetchPersonalInfoActionType = (payload: FetchPersonalInfoPayloadType) => ({
  type: UserActions.FETCH_PERSONAL_INFO,
  payload,
});

export type FetchPersonalInfoActionType = (payload: FetchPersonalInfoPayloadType) => {
  payload: FetchPersonalInfoPayloadType;
  type: UserActions.FETCH_PERSONAL_INFO;
};

export const fetchPetsAC: FetchPetsActionType = (payload: PetType[]) => ({
  type: UserActions.FETCH_PETS,
  payload,
});

export type FetchPetsActionType = (payload: PetType[]) => {
  payload: PetType[];
  type: UserActions.FETCH_PETS;
};

export const addPetAC: AddPetActionType = (payload: PetType) => ({
  type: UserActions.ADD_PET,
  payload,
});

export type AddPetActionType = (payload: PetType) => {
  payload: PetType;
  type: UserActions.ADD_PET;
};
