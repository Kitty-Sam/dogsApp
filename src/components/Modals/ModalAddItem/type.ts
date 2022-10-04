import { UseInputResponseType } from '../../../hooks/useInput';
import { chaptersName } from '../../../enum/chapters';

export type ModalAddItemType = {
  isOpen: boolean;
  chapter: chaptersName;
  setIsOpen: (isOpen: boolean) => void;
  addedTitle: UseInputResponseType;
  addedInfo: UseInputResponseType;
  addedPhone: UseInputResponseType;
  addedAddress: UseInputResponseType;
  addItemPress: () => void;
};
