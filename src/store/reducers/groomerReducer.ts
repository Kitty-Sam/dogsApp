import { ItemType } from '../../components/ItemContainer/type';
import { addGroomerAC, fetchGroomersAC, GroomerActions, removeGroomerAC } from '../actions/groomerAC';

const initialState: initialStateType = {
  groomers: [],
};

type initialStateType = {
  groomers: ItemType[];
};

type ActionsType =
  | ReturnType<typeof addGroomerAC>
  | ReturnType<typeof removeGroomerAC>
  | ReturnType<typeof fetchGroomersAC>;

export const groomersReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case GroomerActions.ADD_GROOMER:
      {
        const { id, title, info, chapter, address, phone } = action.payload;
        const hasGroomer = state.groomers.find(groomer => groomer.id === id);

        if (!hasGroomer) {
          const newGroomer: ItemType = {
            id,
            title,
            info,
            chapter,
            address,
            phone,
          };
          return {
            ...state,
            groomers: [newGroomer, ...state.groomers],
          };
        }
      }
      break;

    case GroomerActions.REMOVE_GROOMER: {
      const { id } = action.payload;
      return {
        ...state,
        groomers: state.groomers.filter(groomer => groomer.id !== id),
      };
    }

    case GroomerActions.FETCH_GROOMERS: {
      return {
        ...state,
        groomers: action.payload,
      };
    }

    default:
      return state;
  }
};
