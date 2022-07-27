import { PayloadType, RemovePayloadType } from './shopAC';

export enum MasterActions {
  ADD_MASTER = 'add_master',
  REMOVE_MASTER = 'remove_master',
  FETCH_MASTERS = 'fetch_masters',
}

export const addMasterAC: AddShopActionType = (payload: PayloadType) => ({
  type: MasterActions.ADD_MASTER,
  payload,
});

export type AddShopActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: MasterActions.ADD_MASTER;
};

export const removeMasterAC: removeMasterActionType = (payload: RemovePayloadType) => ({
  type: MasterActions.REMOVE_MASTER,
  payload,
});

export type removeMasterActionType = (payload: RemovePayloadType) => {
  payload: RemovePayloadType;
  type: MasterActions.REMOVE_MASTER;
};

export const fetchMastersAC: FetchMastersActionType = (payload: PayloadType[]) => ({
  type: MasterActions.FETCH_MASTERS,
  payload,
});

export type FetchMastersActionType = (payload: PayloadType[]) => {
  payload: PayloadType[];
  type: MasterActions.FETCH_MASTERS;
};
