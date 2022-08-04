import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, RouteProp } from '@react-navigation/native';

export type StackScreenNavigationProps<T extends keyof NavParamList, NavParamList extends ParamListBase> = {
  navigation: StackNavigationProp<NavParamList, T>;
  route: RouteProp<NavParamList, T>;
};
