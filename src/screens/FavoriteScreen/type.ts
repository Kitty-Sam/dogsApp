import { AdoptionNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { AdoptionStackParamList } from '../../navigation/AdoptionStack/type';

export type FavoriteScreenProps = StackScreenNavigationProps<AdoptionNavigationName.FAVORITE, AdoptionStackParamList>;
