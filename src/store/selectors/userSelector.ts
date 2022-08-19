import { AppStoreType } from '../store';

export const getPets = (state: AppStoreType) => state.user!.pets;
export const getFavoritesIds = (state: AppStoreType) => state.user!.favorites;
export const getPersonalInfo = (state: AppStoreType) => state.user!.personalInfo;
