import { PersonalInfoType } from '../../screens/ProfileScreen/ProfileScreen';
import {
  addPetAC,
  fetchFavoritePetsAC,
  fetchPersonalInfoAC,
  fetchPetsAC,
  addFavoriteAC,
  UserActions,
  removeFavoriteAC,
  FavoriteSaveIdType,
} from '../actions/userAC';
import { maleName } from '../../enum/maleName';
import { animalsName } from '../../enum/animalsName';

export type PetType = {
  animal: animalsName | string;
  age: string;
  description: string;
  id: number;
  male: maleName | string;
  nickName: string;
  photo: string;
  ownerInfo: string;
};

const initialState: initialStateType = {
  personalInfo: {} as PersonalInfoType,
  pets: [],
  favorites: [],
};

type initialStateType = {
  personalInfo: PersonalInfoType;
  pets: PetType[];
  favorites: FavoriteSaveIdType[];
};

type ActionsType =
  | ReturnType<typeof fetchPersonalInfoAC>
  | ReturnType<typeof fetchPetsAC>
  | ReturnType<typeof addPetAC>
  | ReturnType<typeof addFavoriteAC>
  | ReturnType<typeof fetchFavoritePetsAC>
  | ReturnType<typeof removeFavoriteAC>;

export const userReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case UserActions.FETCH_PERSONAL_INFO: {
      return {
        ...state,
        personalInfo: action.payload,
      };
    }

    case UserActions.FETCH_PETS: {
      return {
        ...state,
        pets: action.payload,
      };
    }

    case UserActions.FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
      };
    }

    case UserActions.ADD_FAVORITE:
      {
        const hasFavoritePet = state.favorites.find(el => el.id === action.payload.id);
        if (!hasFavoritePet) {
          return {
            ...state,
            favorites: [action.payload, ...state.favorites],
          };
        }
        return { ...state };
      }
      break;

    case UserActions.REMOVE_FAVORITE: {
      return {
        ...state,
        favorites: state.favorites.filter(el => el.id !== action.payload.id),
      };
    }

    case UserActions.ADD_PET:
      {
        const { nickName, description, id, male, animal, age, photo, ownerInfo } = action.payload;
        const hasPet = state.pets.find(pet => pet.id === id);

        if (!hasPet) {
          const newPet: PetType = {
            id,
            nickName,
            animal,
            description,
            male,
            age,
            photo,
            ownerInfo,
          };
          return {
            ...state,
            pets: [newPet, ...state.pets],
          };
        }
      }
      break;

    default:
      return state;
  }
};
