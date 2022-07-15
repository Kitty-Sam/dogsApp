import { AppStoreType } from '../store';

export const getLoginStatus = (state: AppStoreType) => state.login.isLogged;
