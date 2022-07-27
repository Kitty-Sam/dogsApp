import { AuthNavigationName } from '../../enum/navigation';

export type AuthStackParamList = {
  [AuthNavigationName.LOGIN]: undefined;
  [AuthNavigationName.REGISTER]: undefined;
};
