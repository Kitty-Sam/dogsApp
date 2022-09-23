type PayloadType = {
  isLogged: boolean;
};

type SaveCurrentUserPayloadType = {
  user: {
    currentUserId: string;
    currentUserName: string;
    currentUserPhoto: string;
    currentUserEmail: string;
  };
};

type SaveLoginErrorPayloadType = {
  error: string;
};

export enum LoginActions {
  TOGGLE_IS_LOGGED = 'toggle_is_logged',
  SAVE_CURRENT_USER = 'save_current_user',
  SAVE_ERROR = 'save_error',
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

export const saveLoginErrorAC: saveLoginErrorActionType = (payload: SaveLoginErrorPayloadType) => ({
  type: LoginActions.SAVE_ERROR,
  payload,
});

export type saveLoginErrorActionType = (payload: SaveLoginErrorPayloadType) => {
  payload: SaveLoginErrorPayloadType;
  type: LoginActions.SAVE_ERROR;
};
