import { CALL_OWNER } from '../sagasActionsTypes/sagasActionsType';

export type CallOwnerPayloadType = {
  phone: string;
};

export const callOwnerAction = (payload: CallOwnerPayloadType): CallOwnerActionType => ({
  type: CALL_OWNER,
  payload,
});

export type CallOwnerActionType = {
  type: typeof CALL_OWNER;
  payload: CallOwnerPayloadType;
};
