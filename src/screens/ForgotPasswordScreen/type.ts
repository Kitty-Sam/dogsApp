import { AuthStackParamList } from '../../navigation/AuthStack/type';
import { AuthNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';

export type ForgotPasswordScreenProps = StackScreenNavigationProps<
  AuthNavigationName.FORGOT_PASSWORD,
  AuthStackParamList
>;
