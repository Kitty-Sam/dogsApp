import { maleName } from '../enum/maleName';
import { iconsName } from '../enum/iconsName';
import { animalsName } from '../enum/animalsName';
import { COLORS } from '../colors/colors';

export const selectItem = (male: maleName): string => {
  switch (male) {
    case maleName.UNKNOWN:
      return iconsName.UNKNOWN;
    case maleName.GIRL:
      return iconsName.GIRL;
    case maleName.BOY:
      return iconsName.BOY;
    default:
      return iconsName.UNKNOWN;
  }
};

export const selectAnimal = (animal: any) => {
  switch (animal) {
    case animalsName.DOG:
      return COLORS.buttons.brown;
    case animalsName.CAT:
      return COLORS.buttons.brown;
    default:
      return COLORS.text.dark_blue;
  }
};
