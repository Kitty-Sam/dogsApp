import { FETCH_FRIENDS_IDS } from '../sagasActionsTypes/sagasActionsType';

export const fetchFriendsIdsAction = (): fetchFriendsIdsActionType => ({
  type: FETCH_FRIENDS_IDS,
});

export type fetchFriendsIdsActionType = {
  type: typeof FETCH_FRIENDS_IDS;
};
