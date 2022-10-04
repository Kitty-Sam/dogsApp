import { ServicesNavigationName } from '../../enum/navigation';
import { StackScreenNavigationProps } from '../navPropsType';
import { chaptersName } from '../../enum/chapters';

export type UsefulStackParamList = {
  [ServicesNavigationName.MASTERS]: {
    moveToItemScreen: (
      id: string,
      info: string,
      title: string,
      chapter: chaptersName,
      address: string,
      phone: string,
    ) => void;
    removeItem: (text: chaptersName, id: string) => void;
  };
  [ServicesNavigationName.SHOPS]: {
    moveToItemScreen: (
      id: string,
      info: string,
      title: string,
      chapter: chaptersName,
      address: string,
      phone: string,
    ) => void;
    removeItem: (text: chaptersName, id: string) => void;
  };
  [ServicesNavigationName.CLINICS]: {
    moveToItemScreen: (
      id: string,
      info: string,
      title: string,
      chapter: chaptersName,
      address: string,
      phone: string,
    ) => void;
    removeItem: (text: chaptersName, id: string) => void;
  };
  [ServicesNavigationName.ROOT]: {
    moveToItemScreen: (
      id: string,
      info: string,
      title: string,
      chapter: chaptersName,
      address: string,
      phone: string,
    ) => void;
    removeItem: (text: chaptersName, id: string) => void;
  };
  [ServicesNavigationName.PET_SITTERS]: {
    moveToItemScreen: (
      id: string,
      info: string,
      title: string,
      chapter: chaptersName,
      address: string,
      phone: string,
    ) => void;
    removeItem: (text: chaptersName, id: string) => void;
  };
  [ServicesNavigationName.GROOMERS]: {
    moveToItemScreen: (
      id: string,
      info: string,
      title: string,
      chapter: chaptersName,
      address: string,
      phone: string,
    ) => void;
    removeItem: (text: chaptersName, id: string) => void;
  };
  [ServicesNavigationName.DOG_FRIENDLY]: {
    moveToItemScreen: (
      id: string,
      info: string,
      title: string,
      chapter: chaptersName,
      address: string,
      phone: string,
    ) => void;
    removeItem: (text: chaptersName, id: string) => void;
  };
  [ServicesNavigationName.TRAINERS]: {
    moveToItemScreen: (
      id: string,
      info: string,
      title: string,
      chapter: chaptersName,
      address: string,
      phone: string,
    ) => void;
    removeItem: (text: chaptersName, id: string) => void;
  };
  [ServicesNavigationName.ITEM_UNITE]: {
    id: string;
    title: string;
    info: string;
    chapter: chaptersName;
    address: string;
    phone: string;
  };
};

export type UsefulStackScreenProps = StackScreenNavigationProps<ServicesNavigationName.ROOT, UsefulStackParamList>;
