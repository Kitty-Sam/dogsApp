import { DrawerNavigationName } from '../../enum/navigation';
import { DrawerStackParamList } from '../../navigation/Drawer/type';
import { StackScreenNavigationProps } from '../../navigation/navPropsType';

export type SettingsScreenProps = StackScreenNavigationProps<DrawerNavigationName.SETTINGS, DrawerStackParamList>;
