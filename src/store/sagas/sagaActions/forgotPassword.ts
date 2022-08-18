import { FORGOT_PASSWORD } from '../sagasActionsTypes/sagasActionsType';

import { UseInputResponseType } from '../../../hooks/useInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../../navigation/AuthStack/type';

export type forgotPasswordActionTypePayloadType = {
  text: string;
  email: UseInputResponseType;
  navigation: StackNavigationProp<AuthStackParamList>;
};

export const forgotPasswordAction = (payload: forgotPasswordActionTypePayloadType): forgotPasswordActionType => ({
  type: FORGOT_PASSWORD,
  payload,
});

export type forgotPasswordActionType = {
  type: typeof FORGOT_PASSWORD;
  payload: forgotPasswordActionTypePayloadType;
};
