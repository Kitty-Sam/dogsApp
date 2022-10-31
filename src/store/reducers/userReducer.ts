import {
  addFriendAC,
  addPersonalPetAC,
  fetchAllUsersAC,
  fetchFriendsIdsAC,
  fetchPersonalPetsAC,
  removeFriendAC,
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
  photo: string;
  about?: string;
};

const initialState: initialStateType = {
  personalPets: [],
  isAddedAll: false,
  users: [],
  friendsIds: [],
};

type initialStateType = {
  personalPets: PetType[];
  isAddedAll: boolean;
  users: UserType[];
  friendsIds: string[];
};

type ActionsType =
  | ReturnType<typeof addPersonalPetAC>
  | ReturnType<typeof fetchPersonalPetsAC>
  | ReturnType<typeof toggleIsAddedPetsAC>
  | ReturnType<typeof fetchAllUsersAC>
  | ReturnType<typeof fetchFriendsIdsAC>
  | ReturnType<typeof addFriendAC>
  | ReturnType<typeof removeFriendAC>;

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
        const { nickName, description, age, chip_id, breed, photo, about } = action.payload;
        const hasPet = state.personalPets.find(pet => pet.nickName === nickName);

        if (!hasPet) {
          const newPet: PetType = {
            nickName,
            description,
            age,
            chip_id,
            breed,
            photo,
            about,
          };
          return {
            ...state,
            personalPets: [newPet, ...state.personalPets],
          };
        }
        return state;
      }
      break;

    case UserActions.FETCH_ALL_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case UserActions.FETCH_FRIENDS_IDS: {
      return {
        ...state,
        friendsIds: action.payload.ids,
      };
    }

    case UserActions.ADD_FRIEND:
      {
        const hasFriend = state.friendsIds.find(friend_id => friend_id === action.payload.id);
        if (!hasFriend) {
          return {
            ...state,
            friendsIds: [action.payload, ...state.friendsIds],
          };
        }
        return { ...state };
      }
      break;

    case UserActions.REMOVE_FRIEND: {
      return {
        ...state,
        friendsIds: state.friendsIds.filter(friend_id => friend_id !== action.payload.id),
      };
    }

    default:
      return state;
  }
};
