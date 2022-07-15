import { PayloadType, RemovePayloadType } from './shopAC';

export enum MasterActions {
  ADD_MASTER = 'add_master',
  REMOVE_MASTER = 'remove_master',
}

export const addMasterAC = (payload: PayloadType) => ({
  type: MasterActions.ADD_MASTER,
  payload,
});

export type AddShopActionType = () => {
  payload: PayloadType;
  type: MasterActions.ADD_MASTER;
};

export const removeMasterAC = (payload: RemovePayloadType) => ({
  type: MasterActions.REMOVE_MASTER,
  payload,
});

export type removeMasterActionType = () => {
  payload: RemovePayloadType;
  type: MasterActions.REMOVE_MASTER;
};
