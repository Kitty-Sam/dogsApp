import {PayloadType, RemovePayloadType} from './shopAC';

export enum ClinicActions {
  ADD_CLINIC = 'add_clinic',
  REMOVE_CLINIC = 'remove_clinic',
}

export const addClinicAC = (payload: PayloadType) => ({
  type: ClinicActions.ADD_CLINIC,
  payload,
});

export type AddClinicActionType = () => {
  payload: PayloadType;
  type: ClinicActions.ADD_CLINIC;
};

export const removeClinicAC = (payload: RemovePayloadType) => ({
  type: ClinicActions.REMOVE_CLINIC,
  payload,
});

export type RemoveClinicActionType = () => {
  payload: RemovePayloadType;
  type: ClinicActions.REMOVE_CLINIC;
};
