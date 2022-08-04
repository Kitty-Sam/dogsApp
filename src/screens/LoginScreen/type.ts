import { AuthStackParamList } from '../../navigation/AuthStack/type';
import { AuthNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';

export type LoginScreenProps = StackScreenNavigationProps<AuthNavigationName.LOGIN, AuthStackParamList>;

export type User = {
  userId: string;
  userName: string;
  photo: string;
  userEmail: string;
};
