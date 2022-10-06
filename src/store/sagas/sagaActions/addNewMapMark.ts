import { ADD_NEW_MAP_MARK } from '../sagasActionsTypes/sagasActionsType';
import { ItemType } from '../../reducers/mapMarksReducer';

export type AddNewMapMarkPayloadType = {
  newMapMark: ItemType;
};

export const addNewMapMarkAction = (payload: AddNewMapMarkPayloadType): AddNewMapMarkActionType => ({
  type: ADD_NEW_MAP_MARK,
  payload,
});

export type AddNewMapMarkActionType = {
  type: typeof ADD_NEW_MAP_MARK;
  payload: AddNewMapMarkPayloadType;
};
