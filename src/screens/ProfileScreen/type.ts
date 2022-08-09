import { DrawerNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';
import { DrawerStackParamList } from '../../navigation/Drawer/type';

export type ProfileScreenProps = StackScreenNavigationProps<DrawerNavigationName.PROFILE, DrawerStackParamList>;
