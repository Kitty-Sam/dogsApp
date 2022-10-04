import { AppStoreType } from '../store';

export const getTrainers = (state: AppStoreType) => state.trainers!.trainers;
