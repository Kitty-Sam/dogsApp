import { MessagesNavigationName } from '../../enum/navigation';

export type MessageStackParamList = {
  [MessagesNavigationName.MESSAGES]: undefined;
  [MessagesNavigationName.CHAT]: { id: string; name: string; avatar: string };
};
