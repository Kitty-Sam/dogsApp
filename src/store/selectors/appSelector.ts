import { AppStoreType } from '../store';

export const getAppStatus = (state: AppStoreType) => state.app.status;
export const getAppError = (state: AppStoreType) => state.app.error;
