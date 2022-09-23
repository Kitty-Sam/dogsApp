import { GOOGLE_SIGN_OUT } from '../sagasActionsTypes/sagasActionsType';

export const googleSignOutAction = (): GoogleSignOutType => ({
  type: GOOGLE_SIGN_OUT,
});

export type GoogleSignOutType = {
  type: typeof GOOGLE_SIGN_OUT;
};
