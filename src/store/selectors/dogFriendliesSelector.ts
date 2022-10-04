import { AppStoreType } from '../store';

export const getDogFriendlies = (state: AppStoreType) => state.dog_friendlies!.dog_friendlies;
