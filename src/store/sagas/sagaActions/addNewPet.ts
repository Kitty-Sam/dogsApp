import { ADD_NEW_PET } from '../sagasActionsTypes/sagasActionsType';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerStackParamList } from '../../../navigation/Drawer/type';
import { UseInputResponseType } from '../../../hooks/useInput';

export type AddNewPetPayloadType = {
  navigation: StackNavigationProp<DrawerStackParamList>;
  description: UseInputResponseType;
  age: UseInputResponseType;
  nickName: UseInputResponseType;
  id: number;
  male: string;
  animal: string;
  setMale: (text: string) => void;
  setAnimal: (text: string) => void;
};

export const addNewPetAction = (payload: AddNewPetPayloadType): AddNewPetActionType => ({
  type: ADD_NEW_PET,
  payload,
});

export type AddNewPetActionType = {
  type: typeof ADD_NEW_PET;
  payload: AddNewPetPayloadType;
};
