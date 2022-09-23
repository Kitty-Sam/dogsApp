import { AppStoreType } from '../store';

export const getLoginStatus = (state: AppStoreType) => state.login.isLogged;
export const getCurrentUserId = (state: AppStoreType) => state.login.user.currentUserId;
export const getCurrentUserName = (state: AppStoreType) => state.login.user.currentUserName;
export const getCurrentUserPhoto = (state: AppStoreType) => state.login.user.currentUserPhoto;
export const getLoginError = (state: AppStoreType) => state.login.error;
