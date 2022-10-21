import { ADD_FRIEND } from '../sagasActionsTypes/sagasActionsType';

export type AddFriendPayloadType = {
  id: string;
};

export const addFriendAction = (payload: AddFriendPayloadType): AddFriendActionType => ({
  type: ADD_FRIEND,
  payload,
});

export type AddFriendActionType = {
  type: typeof ADD_FRIEND;
  payload: AddFriendPayloadType;
};
