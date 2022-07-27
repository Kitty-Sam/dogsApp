type PayloadType = {
  isLogged: boolean;
};

type SaveCurrentUserPayloadType = {
  user: { currentUserId: string; currentUserName: string; currentUserPhoto: string; currentUserEmail: string };
};

export enum LoginActions {
  TOGGLE_IS_LOGGED = 'toggle_is_logged',
  SAVE_CURRENT_USER = 'save_current_user',
}

export const toggleIsLoggedAC: ToggleIsLoggedActionType = (payload: PayloadType) => ({
  type: LoginActions.TOGGLE_IS_LOGGED,
  payload,
});

export type ToggleIsLoggedActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: LoginActions.TOGGLE_IS_LOGGED;
};

export const saveCurrentUserAC: SaveCurrentUserActionType = (payload: SaveCurrentUserPayloadType) => ({
  type: LoginActions.SAVE_CURRENT_USER,
  payload,
});

export type SaveCurrentUserActionType = (payload: SaveCurrentUserPayloadType) => {
  payload: SaveCurrentUserPayloadType;
  type: LoginActions.SAVE_CURRENT_USER;
};
