import { PayloadType, RemovePayloadType } from './shopAC';

export enum TrainerActions {
  ADD_TRAINER = 'add_trainer',
  REMOVE_TRAINER = 'remove_trainer',
  FETCH_TRAINERS = 'fetch_trainer',
}

export const addTrainerAC: AddTrainerActionType = (payload: PayloadType) => ({
  type: TrainerActions.ADD_TRAINER,
  payload,
});

export type AddTrainerActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: TrainerActions.ADD_TRAINER;
};

export const removeTrainerAC: removeTrainerActionType = (payload: RemovePayloadType) => ({
  type: TrainerActions.REMOVE_TRAINER,
  payload,
});

export type removeTrainerActionType = (payload: RemovePayloadType) => {
  payload: RemovePayloadType;
  type: TrainerActions.REMOVE_TRAINER;
};

export const fetchTrainersAC: FetchTrainersActionType = (payload: PayloadType[]) => ({
  type: TrainerActions.FETCH_TRAINERS,
  payload,
});

export type FetchTrainersActionType = (payload: PayloadType[]) => {
  payload: PayloadType[];
  type: TrainerActions.FETCH_TRAINERS;
};
