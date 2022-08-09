import { AppStoreType } from '../store';

export const getPersonalInfo = (state: AppStoreType) => state.user!.personalInfo;
export const getPets = (state: AppStoreType) => state.user!.pets;
