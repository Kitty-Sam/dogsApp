type PayloadType = {
  isLogged: boolean;
};

export enum LoginActions {
  TOGGLE_IS_LOGGED = 'toggle_is_logged',
}

export const toggleIsLoggedAC = (payload: PayloadType) => ({
  type: LoginActions.TOGGLE_IS_LOGGED,
  payload,
});

export type ToggleIsLoggedActionType = () => {
  payload: PayloadType;
  type: LoginActions.TOGGLE_IS_LOGGED;
};
