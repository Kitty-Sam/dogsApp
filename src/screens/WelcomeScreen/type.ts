import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../navigation/AuthStack/type';
import { AuthNavigationName } from '../../enum/navigation';

export type WelcomeScreenProps = StackNavigationProp<AuthStackParamList, AuthNavigationName.WELCOME>;
