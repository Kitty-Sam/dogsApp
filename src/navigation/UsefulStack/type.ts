import { ServicesNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../navPropsType';

export type UsefulStackParamList = {
  [ServicesNavigationName.MASTERS]: undefined;
  [ServicesNavigationName.SHOPS]: undefined;
  [ServicesNavigationName.CLINICS]: undefined;
  [ServicesNavigationName.ROOT]: undefined;
  [ServicesNavigationName.ADD]: undefined;
};

export type UsefulStackScreenProps = StackScreenNavigationProps<ServicesNavigationName.ROOT, UsefulStackParamList>;
