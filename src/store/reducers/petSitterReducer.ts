import { ItemType } from '../../components/ItemContainer/type';
import { addPetSitterAC, fetchPetSittersAC, PetSitterActions, removePetSitterAC } from '../actions/petSitterAC';

const initialState: initialStateType = {
  petSitters: [],
};

type initialStateType = {
  petSitters: ItemType[];
};

type ActionsType =
  | ReturnType<typeof addPetSitterAC>
  | ReturnType<typeof removePetSitterAC>
  | ReturnType<typeof fetchPetSittersAC>;

export const petSittersReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case PetSitterActions.ADD_PET_SITTER:
      {
        const { id, title, info, chapter, address, phone } = action.payload;
        const hasPetSitter = state.petSitters.find(petSitter => petSitter.id === id);

        if (!hasPetSitter) {
          const newPetSitter: ItemType = {
            id,
            title,
            info,
            chapter,
            address,
            phone,
          };
          return {
            ...state,
            petSitters: [newPetSitter, ...state.petSitters],
          };
        }
      }
      break;

    case PetSitterActions.REMOVE_PET_SITTER: {
      const { id } = action.payload;
      return {
        ...state,
        petSitters: state.petSitters.filter(petSitter => petSitter.id !== id),
      };
    }

    case PetSitterActions.FETCH_PET_SITTERS: {
      return {
        ...state,
        petSitters: action.payload,
      };
    }

    default:
      return state;
  }
};
