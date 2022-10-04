import { PayloadType, RemovePayloadType } from './shopAC';

export enum GroomerActions {
  ADD_GROOMER = 'add_groomer',
  REMOVE_GROOMER = 'remove_groomer',
  FETCH_GROOMERS = 'fetch_groomers',
}

export const addGroomerAC: AddGroomerActionType = (payload: PayloadType) => ({
  type: GroomerActions.ADD_GROOMER,
  payload,
});

export type AddGroomerActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: GroomerActions.ADD_GROOMER;
};

export const removeGroomerAC: removeGroomerActionType = (payload: RemovePayloadType) => ({
  type: GroomerActions.REMOVE_GROOMER,
  payload,
});

export type removeGroomerActionType = (payload: RemovePayloadType) => {
  payload: RemovePayloadType;
  type: GroomerActions.REMOVE_GROOMER;
};

export const fetchGroomersAC: FetchGroomersActionType = (payload: PayloadType[]) => ({
  type: GroomerActions.FETCH_GROOMERS,
  payload,
});

export type FetchGroomersActionType = (payload: PayloadType[]) => {
  payload: PayloadType[];
  type: GroomerActions.FETCH_GROOMERS;
};
