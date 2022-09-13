import { GOOGLE_REGISTER } from '../sagasActionsTypes/sagasActionsType';

import { UseInputResponseType } from '../../../hooks/useInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../../navigation/AuthStack/type';

export type GoogleRegisterPayloadType = {
  userPassword: UseInputResponseType;
  userEmail: UseInputResponseType;
  userName: UseInputResponseType;
  navigation: StackNavigationProp<AuthStackParamList>;
};

export const googleRegisterAction = (payload: GoogleRegisterPayloadType): GoogleRegisterType => ({
  type: GOOGLE_REGISTER,
  payload,
});

export type GoogleRegisterType = {
  type: typeof GOOGLE_REGISTER;
  payload: GoogleRegisterPayloadType;
};
