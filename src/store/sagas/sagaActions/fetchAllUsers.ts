import { FETCH_ALL_USERS } from '../sagasActionsTypes/sagasActionsType';

export const fetchAllUsersAction = (): fetchAllUsersActionType => ({
  type: FETCH_ALL_USERS,
});

export type fetchAllUsersActionType = {
  type: typeof FETCH_ALL_USERS;
};
