import { GOOGLE_SIGN_IN } from '../sagasActionsTypes/sagasActionsType';

import { UseInputResponseType } from '../../../hooks/useInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../../navigation/AuthStack/type';
import { RouteProp } from '@react-navigation/native';

export type GoogleSignInPayloadType = {
  userPassword: UseInputResponseType;
  userEmail: UseInputResponseType;
  navigation: StackNavigationProp<AuthStackParamList>;
  route: RouteProp<AuthStackParamList>;
};

export const googleSignInAction = (payload: GoogleSignInPayloadType): GoogleSignInType => ({
  type: GOOGLE_SIGN_IN,
  payload,
});

export type GoogleSignInType = {
  type: typeof GOOGLE_SIGN_IN;
  payload: GoogleSignInPayloadType;
};
