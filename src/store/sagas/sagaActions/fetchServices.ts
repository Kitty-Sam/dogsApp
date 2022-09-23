import { FETCH_SERVICES } from '../sagasActionsTypes/sagasActionsType';
import { chaptersName } from '../../../enum/chapters';

export type fetchServicesPayloadType = {
  chapter: chaptersName;
};

export const fetchServicesAction = (payload: fetchServicesPayloadType): fetchServicesActionType => ({
  type: FETCH_SERVICES,
  payload,
});

export type fetchServicesActionType = {
  type: typeof FETCH_SERVICES;
  payload: fetchServicesPayloadType;
};
