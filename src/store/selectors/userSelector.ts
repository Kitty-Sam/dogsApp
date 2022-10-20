import { AppStoreType } from '../store';

export const getPersonalPets = (state: AppStoreType) => state.user!.personalPets;
export const getIsAddedAll = (state: AppStoreType) => state.user!.isAddedAll;
export const getAllUsers = (state: AppStoreType) => state.user!.users;
