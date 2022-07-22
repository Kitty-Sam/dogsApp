import { PayloadType, RemovePayloadType } from './shopAC';

export enum ClinicActions {
  ADD_CLINIC = 'add_clinic',
  REMOVE_CLINIC = 'remove_clinic',
  FETCH_CLINICS = 'fetch_clinics',
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

export const fetchClinicsAC: FetchClinicsActionType = (payload: PayloadType[]) => ({
  type: ClinicActions.FETCH_CLINICS,
  payload,
});

export type FetchClinicsActionType = (payload: PayloadType[]) => {
  payload: PayloadType[];
  type: ClinicActions.FETCH_CLINICS;
};
