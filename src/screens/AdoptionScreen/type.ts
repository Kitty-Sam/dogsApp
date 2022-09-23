import { AdoptionNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { AdoptionStackParamList } from '../../navigation/AdoptionStack/type';

export type AdoptionScreenProps = StackScreenNavigationProps<AdoptionNavigationName.ADOPTION, AdoptionStackParamList>;
