import { AppStoreType } from '../store';

export const getPets = (state: AppStoreType) => state.user!.pets;
