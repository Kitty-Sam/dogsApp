import { FriendsNavigationName } from '../../enum/navigation';

export type FriendsStackParamList = {
  [FriendsNavigationName.FRIENDS]: undefined;
  [FriendsNavigationName.USERS]: undefined;
  [FriendsNavigationName.FRIEND_PROFILE]: {
    id: string;
    name: string;
    isFollow?: boolean;
  };
};
