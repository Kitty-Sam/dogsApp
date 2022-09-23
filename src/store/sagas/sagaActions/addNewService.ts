import { ADD_NEW_SERVICE } from '../sagasActionsTypes/sagasActionsType';
import { chaptersName } from '../../../enum/chapters';

export type AddNewServicePayloadType = {
  chapter: chaptersName;
  newService: any;
};

export const addNewServiceAction = (payload: AddNewServicePayloadType): AddNewServiceActionType => ({
  type: ADD_NEW_SERVICE,
  payload,
});

export type AddNewServiceActionType = {
  type: typeof ADD_NEW_SERVICE;
  payload: AddNewServicePayloadType;
};
