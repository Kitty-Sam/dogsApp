import { PetType } from '../../store/reducers/userReducer';
import { StackNavigationProp } from '@react-navigation/stack';
import { PetsStackParamList } from '../../navigation/PetsStack/type';

export type PetItemType = {
  pet: PetType;
  navigation: StackNavigationProp<PetsStackParamList>;
};
