import { AuthNavigationName } from '../../enum/navigation';

export type AuthStackParamList = {
  [AuthNavigationName.WELCOME]: undefined;
  [AuthNavigationName.LOGIN]?: { name: string };
  [AuthNavigationName.REGISTER]: undefined;
  [AuthNavigationName.FORGOT_PASSWORD]: undefined;
};
