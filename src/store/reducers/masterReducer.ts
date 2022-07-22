import { ItemType } from '../../components/ItemContainer/type';
import { addMasterAC, MasterActions, removeMasterAC } from '../actions/masterAC';
import { chaptersName } from '../../enum/chapters';

const initialState: initialStateType = {
  masters: [],
};

type initialStateType = {
  masters: ItemType[];
};

type ActionsType = ReturnType<typeof addMasterAC> | ReturnType<typeof removeMasterAC>;

export const mastersReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case MasterActions.ADD_MASTER:
      {
        const { id, title, info } = action.payload;
        const hasMaster = state.masters.find(master => master.id === id);

        if (!hasMaster) {
          const newMaster: ItemType = {
            id,
            title,
            info,
            chapter: chaptersName.MASTER,
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

    default:
      return state;
  }
};
