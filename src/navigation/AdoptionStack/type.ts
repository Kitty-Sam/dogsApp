import { AdoptionNavigationName } from '../../enum/navigation';

export type AdoptionStackParamList = {
  [AdoptionNavigationName.ADOPTION]: undefined;
  [AdoptionNavigationName.PET_UNITE]: {
    nickName: string;
    description: string;
    photo: string;
    age: string;
    male: string;
    animal: string;
    id: number;
  };
};
