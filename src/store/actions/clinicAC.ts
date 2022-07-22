import { PayloadType, RemovePayloadType } from './shopAC';

export enum ClinicActions {
  ADD_CLINIC = 'add_clinic',
  REMOVE_CLINIC = 'remove_clinic',
}

export const addClinicAC: AddClinicActionType = (payload: PayloadType) => ({
  type: ClinicActions.ADD_CLINIC,
  payload,
});

export type AddClinicActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: ClinicActions.ADD_CLINIC;
};

export const removeClinicAC: RemoveClinicActionType = (payload: RemovePayloadType) => ({
  type: ClinicActions.REMOVE_CLINIC,
  payload,
});

export type RemoveClinicActionType = (payload: RemovePayloadType) => {
  payload: RemovePayloadType;
  type: ClinicActions.REMOVE_CLINIC;
};
