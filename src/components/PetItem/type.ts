import { PetType } from '../../store/reducers/userReducer';
import { StackNavigationProp } from '@react-navigation/stack';
import { AdoptionStackParamList } from '../../navigation/AdoptionStack/type';

export type PetItemType = {
  pet: PetType;
  navigation?: StackNavigationProp<AdoptionStackParamList>;
};
