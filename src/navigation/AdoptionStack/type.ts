import { AdoptionNavigationName } from '../../enum/navigation';
import { maleName } from '../../enum/maleName';
import { animalsName } from '../../enum/animalsName';

export type AdoptionStackParamList = {
  [AdoptionNavigationName.ADOPTION]: undefined;
  [AdoptionNavigationName.FAVORITE]: undefined;
  [AdoptionNavigationName.PET_UNITE]: {
    nickName: string;
    description: string;
    photo: string;
    age: string;
    male: maleName;
    animal: animalsName;
    id: number;
  };
};
