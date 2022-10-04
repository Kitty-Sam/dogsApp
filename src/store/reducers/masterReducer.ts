import { ItemType } from '../../components/ItemContainer/type';
import { addMasterAC, fetchMastersAC, MasterActions, removeMasterAC } from '../actions/masterAC';

const initialState: initialStateType = {
  masters: [],
};

type initialStateType = {
  masters: ItemType[];
};

type ActionsType =
  | ReturnType<typeof addMasterAC>
  | ReturnType<typeof removeMasterAC>
  | ReturnType<typeof fetchMastersAC>;

export const mastersReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case MasterActions.ADD_MASTER:
      {
        const { id, title, info, chapter, address, phone } = action.payload;
        const hasMaster = state.masters.find(master => master.id === id);

        if (!hasMaster) {
          const newMaster: ItemType = {
            id,
            title,
            info,
            chapter,
            address,
            phone,
          };
          return {
            ...state,
            masters: [newMaster, ...state.masters],
          };
        }
      }
      break;

    case MasterActions.REMOVE_MASTER: {
      const { id } = action.payload;
      return {
        ...state,
        masters: state.masters.filter(master => master.id !== id),
      };
    }

    case MasterActions.FETCH_MASTERS: {
      return {
        ...state,
        masters: action.payload,
      };
    }

    default:
      return state;
  }
};
