import { PetType } from '../reducers/userReducer';

export type FetchPersonalInfoPayloadType = {
  petName: string;
  petAge: string;
  petBreed: string;
};

export enum UserActions {
  FETCH_PERSONAL_INFO = 'fetch_personal_info',
  FETCH_PETS = 'fetch_pets',
  ADD_PET = 'add_pet',
  ADD_FAVORITE = 'add_favorite_pet',
  REMOVE_FAVORITE = 'remove_favorite_pet',
  FAVORITES = 'favorite_pets',
}

export type FavoriteSaveIdType = {
  id: number;
};

export const fetchPersonalInfoAC: FetchPersonalInfoActionType = (payload: FetchPersonalInfoPayloadType) => ({
  type: UserActions.FETCH_PERSONAL_INFO,
  payload,
});

export type FetchPersonalInfoActionType = (payload: FetchPersonalInfoPayloadType) => {
  payload: FetchPersonalInfoPayloadType;
  type: UserActions.FETCH_PERSONAL_INFO;
};

//pets

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

// favorites pets

export const fetchFavoritePetsAC: FetchFavoritePetsActionType = (payload: FavoriteSaveIdType[]) => ({
  type: UserActions.FAVORITES,
  payload,
});

export type FetchFavoritePetsActionType = (payload: FavoriteSaveIdType[]) => {
  payload: FavoriteSaveIdType[];
  type: UserActions.FAVORITES;
};

export const addFavoriteAC: addFavoriteType = (payload: FavoriteSaveIdType) => ({
  type: UserActions.ADD_FAVORITE,
  payload,
});

export type addFavoriteType = (payload: FavoriteSaveIdType) => {
  payload: FavoriteSaveIdType;
  type: UserActions.ADD_FAVORITE;
};

export const removeFavoriteAC: removeFavoriteType = (payload: FavoriteSaveIdType) => ({
  type: UserActions.REMOVE_FAVORITE,
  payload,
});

export type removeFavoriteType = (payload: FavoriteSaveIdType) => {
  payload: FavoriteSaveIdType;
  type: UserActions.REMOVE_FAVORITE;
};
