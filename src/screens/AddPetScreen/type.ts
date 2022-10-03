import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { ServicesNavigationName } from '../../enum/navigation';
import { UsefulStackParamList } from '../../navigation/UsefulStack/type';

export type AddPetScreenProps = StackScreenNavigationProps<ServicesNavigationName.ADD, UsefulStackParamList>;
