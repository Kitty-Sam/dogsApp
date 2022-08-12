import { AppStoreType } from '../store';

export const getPets = (state: AppStoreType) => state.user!.pets;
export const getFavorites = (state: AppStoreType) => state.user!.favorites;
