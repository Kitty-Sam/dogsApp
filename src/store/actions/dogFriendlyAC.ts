import { PayloadType, RemovePayloadType } from './shopAC';

export enum DogFriendlyActions {
  ADD_DOG_FRIENDLY = 'add_dog_friendly',
  REMOVE_DOG_FRIENDLY = 'remove_dog_friendly',
  FETCH_DOG_FRIENDLIES = 'fetch_dog_friendlies',
}

export const addDogFriendlyAC: AddDogFriendlyActionType = (payload: PayloadType) => ({
  type: DogFriendlyActions.ADD_DOG_FRIENDLY,
  payload,
});

export type AddDogFriendlyActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: DogFriendlyActions.ADD_DOG_FRIENDLY;
};

export const removeDogFriendlyAC: removeDogFriendlyActionType = (payload: RemovePayloadType) => ({
  type: DogFriendlyActions.REMOVE_DOG_FRIENDLY,
  payload,
});

export type removeDogFriendlyActionType = (payload: RemovePayloadType) => {
  payload: RemovePayloadType;
  type: DogFriendlyActions.REMOVE_DOG_FRIENDLY;
};

export const fetchDogFriendliesAC: FetchDogFriendliesActionType = (payload: PayloadType[]) => ({
  type: DogFriendlyActions.FETCH_DOG_FRIENDLIES,
  payload,
});

export type FetchDogFriendliesActionType = (payload: PayloadType[]) => {
  payload: PayloadType[];
  type: DogFriendlyActions.FETCH_DOG_FRIENDLIES;
};
