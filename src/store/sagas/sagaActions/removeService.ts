import { REMOVE_SERVICE } from '../sagasActionsTypes/sagasActionsType';
import { chaptersName } from '../../../enum/chapters';

export type RemoveServicePayloadType = {
  chapter: chaptersName;
  id: string;
};

export const removeServiceAction = (payload: RemoveServicePayloadType): RemoveServiceActionType => ({
  type: REMOVE_SERVICE,
  payload,
});

export type RemoveServiceActionType = {
  type: typeof REMOVE_SERVICE;
  payload: RemoveServicePayloadType;
};
