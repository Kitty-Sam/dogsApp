import { AuthNavigationName } from '../../enum/navigation';

export type AuthStackParamList = {
  [AuthNavigationName.WELCOME]: undefined;
  [AuthNavigationName.LOGIN]: undefined;
  [AuthNavigationName.REGISTER]: undefined;
  [AuthNavigationName.FORGOT_PASSWORD]: undefined;
  [AuthNavigationName.ADD_PET]: undefined;
};
