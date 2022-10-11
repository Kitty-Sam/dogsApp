import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { AuthNavigationName } from '../../enum/navigation';
import { AuthStackParamList } from '../../navigation/AuthStack/type';

export type AddPetScreenProps = StackScreenNavigationProps<AuthNavigationName.ADD_PET, AuthStackParamList>;
