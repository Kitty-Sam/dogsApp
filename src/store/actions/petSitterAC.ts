import { PayloadType, RemovePayloadType } from './shopAC';

export enum PetSitterActions {
  ADD_PET_SITTER = 'add_pet_sitter',
  REMOVE_PET_SITTER = 'remove_pet_sitter',
  FETCH_PET_SITTERS = 'fetch_pet_sitters',
}

export const addPetSitterAC: AddPetSitterActionType = (payload: PayloadType) => ({
  type: PetSitterActions.ADD_PET_SITTER,
  payload,
});

export type AddPetSitterActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: PetSitterActions.ADD_PET_SITTER;
};

export const removePetSitterAC: removePetSitterActionType = (payload: RemovePayloadType) => ({
  type: PetSitterActions.REMOVE_PET_SITTER,
  payload,
});

export type removePetSitterActionType = (payload: RemovePayloadType) => {
  payload: RemovePayloadType;
  type: PetSitterActions.REMOVE_PET_SITTER;
};

export const fetchPetSittersAC: FetchPetSittersActionType = (payload: PayloadType[]) => ({
  type: PetSitterActions.FETCH_PET_SITTERS,
  payload,
});

export type FetchPetSittersActionType = (payload: PayloadType[]) => {
  payload: PayloadType[];
  type: PetSitterActions.FETCH_PET_SITTERS;
};
