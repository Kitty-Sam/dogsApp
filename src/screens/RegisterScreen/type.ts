import { AuthStackParamList } from '../../navigation/AuthStack/type';
import { AuthNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';

export type RegisterScreenProps = StackScreenNavigationProps<AuthNavigationName.REGISTER, AuthStackParamList>;
