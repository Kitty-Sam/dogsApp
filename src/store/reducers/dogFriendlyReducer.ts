import { ItemType } from '../../components/ItemContainer/type';
import {
  addDogFriendlyAC,
  DogFriendlyActions,
  fetchDogFriendliesAC,
  removeDogFriendlyAC,
} from '../actions/dogFriendlyAC';

const initialState: initialStateType = {
  dog_friendlies: [],
};

type initialStateType = {
  dog_friendlies: ItemType[];
};

type ActionsType =
  | ReturnType<typeof addDogFriendlyAC>
  | ReturnType<typeof removeDogFriendlyAC>
  | ReturnType<typeof fetchDogFriendliesAC>;

export const dogFriendliesReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case DogFriendlyActions.ADD_DOG_FRIENDLY:
      {
        const { id, title, info, chapter, address, phone } = action.payload;
        const hasDogFriendly = state.dog_friendlies.find(dog_friendly => dog_friendly.id === id);

        if (!hasDogFriendly) {
          const newDogFriendly: ItemType = {
            id,
            title,
            info,
            chapter,
            address,
            phone,
          };
          return {
            ...state,
            dog_friendlies: [newDogFriendly, ...state.dog_friendlies],
          };
        }
      }
      break;

    case DogFriendlyActions.REMOVE_DOG_FRIENDLY: {
      const { id } = action.payload;
      return {
        ...state,
        dog_friendlies: state.dog_friendlies.filter(dog_friendly => dog_friendly.id !== id),
      };
    }

    case DogFriendlyActions.FETCH_DOG_FRIENDLIES: {
      return {
        ...state,
        dog_friendlies: action.payload,
      };
    }

    default:
      return state;
  }
};
