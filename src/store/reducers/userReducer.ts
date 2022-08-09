import { PersonalInfoType } from '../../screens/ProfileScreen/ProfileScreen';
import { addPetAC, fetchPersonalInfoAC, fetchPetsAC, UserActions } from '../actions/userAC';

export type PetType = {
  animal: string;
  age: string;
  description: string;
  id: number;
  male: string;
  nickName: string;
  photo: string;
};

const initialState: initialStateType = {
  personalInfo: {} as PersonalInfoType,
  pets: [],
};

type initialStateType = {
  personalInfo: PersonalInfoType;
  pets: PetType[];
};

type ActionsType =
  | ReturnType<typeof fetchPersonalInfoAC>
  | ReturnType<typeof fetchPetsAC>
  | ReturnType<typeof addPetAC>;

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

    case UserActions.ADD_PET:
      {
        const { nickName, description, id, male, animal, age, photo } = action.payload;
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
