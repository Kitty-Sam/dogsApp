import { MessagesNavigationName } from '../../enum/navigation';

export type MessageStackParamList = {
  [MessagesNavigationName.MESSAGES]: undefined;
  [MessagesNavigationName.CHAT]: undefined;
};
