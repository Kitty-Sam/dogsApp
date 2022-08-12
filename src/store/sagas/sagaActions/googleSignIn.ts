import { GOOGLE_SIGN_IN } from '../sagasActionsTypes/sagasActionsType';

import { UseInputResponseType } from '../../../hooks/useInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../../navigation/AuthStack/type';

export type GoogleSignInPayloadType = {
  userPassword: UseInputResponseType;
  userEmail: UseInputResponseType;
  navigation: StackNavigationProp<AuthStackParamList>;
};

export const googleSignInAction = (payload: GoogleSignInPayloadType): GoogleSignInType => ({
  type: GOOGLE_SIGN_IN,
  payload,
});

export type GoogleSignInType = {
  type: typeof GOOGLE_SIGN_IN;
  payload: GoogleSignInPayloadType;
};
