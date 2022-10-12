import { FriendsNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { FriendsStackParamList } from '../../navigation/FriendsStack/type';

export type FriendsScreenProps = StackScreenNavigationProps<FriendsNavigationName.FRIENDS, FriendsStackParamList>;
