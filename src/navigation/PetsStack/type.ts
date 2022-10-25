import { PetsNavigationName } from '../../enum/navigation';

export type PetsStackParamList = {
  [PetsNavigationName.PROFILE]: undefined;
  [PetsNavigationName.EDIT_PET]: undefined;
  [PetsNavigationName.ADD_PET]: {
    stack: string;
  };
  [PetsNavigationName.PET_UNITE]: {
    nickName: string;
    breed: string;
    age: string;
    description: string;
    chip_id: string;
    photo: string;
  };
};
