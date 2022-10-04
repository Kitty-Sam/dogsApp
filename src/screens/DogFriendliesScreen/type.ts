import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { ServicesNavigationName } from '../../enum/navigation';
import { UsefulStackParamList } from '../../navigation/UsefulStack/type';

export type DogFriendlyScreenProps = StackScreenNavigationProps<
  ServicesNavigationName.DOG_FRIENDLY,
  UsefulStackParamList
>;
