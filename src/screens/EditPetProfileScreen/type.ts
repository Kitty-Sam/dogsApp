import { PetsNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { PetsStackParamList } from '../../navigation/PetsStack/type';

export type ProfileScreenProps = StackScreenNavigationProps<PetsNavigationName.PROFILE, PetsStackParamList>;
