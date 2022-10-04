import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { ServicesNavigationName } from '../../enum/navigation';
import { UsefulStackParamList } from '../../navigation/UsefulStack/type';

export type PetSittersScreenProps = StackScreenNavigationProps<
  ServicesNavigationName.PET_SITTERS,
  UsefulStackParamList
>;
