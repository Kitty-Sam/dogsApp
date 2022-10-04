import { ItemType } from '../../components/ItemContainer/type';
import { addTrainerAC, fetchTrainersAC, removeTrainerAC, TrainerActions } from '../actions/trainerAC';

const initialState: initialStateType = {
  trainers: [],
};

type initialStateType = {
  trainers: ItemType[];
};

type ActionsType =
  | ReturnType<typeof addTrainerAC>
  | ReturnType<typeof removeTrainerAC>
  | ReturnType<typeof fetchTrainersAC>;

export const trainersReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case TrainerActions.ADD_TRAINER:
      {
        const { id, title, info, chapter, address, phone } = action.payload;
        const hasTrainer = state.trainers.find(trainer => trainer.id === id);

        if (!hasTrainer) {
          const newTrainer: ItemType = {
            id,
            title,
            info,
            chapter,
            address,
            phone,
          };
          return {
            ...state,
            trainers: [newTrainer, ...state.trainers],
          };
        }
      }
      break;

    case TrainerActions.REMOVE_TRAINER: {
      const { id } = action.payload;
      return {
        ...state,
        trainers: state.trainers.filter(trainer => trainer.id !== id),
      };
    }

    case TrainerActions.FETCH_TRAINERS: {
      return {
        ...state,
        trainers: action.payload,
      };
    }

    default:
      return state;
  }
};
