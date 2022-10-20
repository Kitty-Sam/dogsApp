import {
  addPersonalPetAC,
  fetchAllUsersAC,
  fetchPersonalPetsAC,
  toggleIsAddedPetsAC,
  UserActions,
  UserType,
} from '../actions/userAC';

export type PetType = {
  nickName: string;
  age: string;
  description: string;
  breed: string;
  chip_id: string;
};

const initialState: initialStateType = {
  personalPets: [],
  isAddedAll: false,
  users: [],
};

type initialStateType = {
  personalPets: PetType[];
  isAddedAll: boolean;
  users: UserType[];
};

type ActionsType =
  | ReturnType<typeof addPersonalPetAC>
  | ReturnType<typeof fetchPersonalPetsAC>
  | ReturnType<typeof toggleIsAddedPetsAC>
  | ReturnType<typeof fetchAllUsersAC>;

export const userReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case UserActions.IS_ADDED_ALL: {
      const { isAddedAll } = action.payload;
      return {
        ...state,
        isAddedAll,
      };
    }

    case UserActions.FETCH_PERSONAL_PETS: {
      return {
        ...state,
        personalPets: action.payload,
      };
    }
    case UserActions.ADD_PERSONAL_PET:
      {
        const { nickName, description, age, chip_id, breed } = action.payload;
        const hasPet = state.personalPets.find(pet => pet.nickName === nickName);

        if (!hasPet) {
          const newPet: PetType = {
            nickName,
            description,
            age,
            chip_id,
            breed,
          };
          return {
            ...state,
            personalPets: [newPet, ...state.personalPets],
          };
        }
      }
      break;

    case UserActions.FETCH_ALL_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    // case UserActions.FETCH_PERSONAL_INFO: {
    //   return {
    //     ...state,
    //     personalInfo: action.payload,
    //   };
    // }
    //
    // case UserActions.FETCH_PETS: {
    //   return {
    //     ...state,
    //     pets: action.payload,
    //   };
    // }
    //
    // case UserActions.FAVORITES: {
    //   return {
    //     ...state,
    //     favorites: action.payload,
    //   };
    // }
    //
    // case UserActions.ADD_FAVORITE:
    //   {
    //     const hasFavoritePet = state.favorites.find(el => el.id === action.payload.id);
    //     if (!hasFavoritePet) {
    //       return {
    //         ...state,
    //         favorites: [action.payload, ...state.favorites],
    //       };
    //     }
    //     return { ...state };
    //   }
    //   break;
    //
    // case UserActions.REMOVE_FAVORITE: {
    //   return {
    //     ...state,
    //     favorites: state.favorites.filter(el => el.id !== action.payload.id),
    //   };
    // }
    //
    // case UserActions.ADD_PET:
    //   {
    //     const { nickName, description, id, male, animal, age, photo, ownerInfo } = action.payload;
    //     const hasPet = state.pets.find(pet => pet.id === id);
    //
    //     if (!hasPet) {
    //       const newPet: PetType = {
    //         id,
    //         nickName,
    //         animal,
    //         description,
    //         male,
    //         age,
    //         photo,
    //         ownerInfo,
    //       };
    //       return {
    //         ...state,
    //         pets: [newPet, ...state.pets],
    //       };
    //     }
    //   }
    //   break;

    default:
      return state;
  }
};
