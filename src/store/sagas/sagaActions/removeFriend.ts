import { REMOVE_FRIEND } from '../sagasActionsTypes/sagasActionsType';

export type RemoveFriendPayloadType = {
  id: string;
};

export const removeFriendAction = (payload: RemoveFriendPayloadType): RemoveFriendActionType => ({
  type: REMOVE_FRIEND,
  payload,
});

export type RemoveFriendActionType = {
  type: typeof REMOVE_FRIEND;
  payload: RemoveFriendPayloadType;
};
