import { chaptersName } from '../../enum/chapters';

export type ItemType = {
  id: string;
  title: string;
  info: string;
  chapter: chaptersName;
};
