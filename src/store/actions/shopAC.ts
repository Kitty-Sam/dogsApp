import { MasterActions } from './masterAC';

export type PayloadType = {
  id: string;
  title: string;
  info: string;
};

export type RemovePayloadType = Omit<PayloadType, 'title' | 'info'>;

export enum ShopActions {
  ADD_SHOP = 'add_shop',
  REMOVE_SHOP = 'remove_shop',
  FETCH_SHOPS = 'fetch_shops',
}

export const addShopAC: AddShopActionType = (payload: PayloadType) => ({
  type: ShopActions.ADD_SHOP,
  payload,
});

export type AddShopActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: ShopActions.ADD_SHOP;
};

export const removeShopAC: RemoveShopActionType = (payload: RemovePayloadType) => ({
  type: ShopActions.REMOVE_SHOP,
  payload,
});

export type RemoveShopActionType = (payload: RemovePayloadType) => {
  payload: RemovePayloadType;
  type: ShopActions.REMOVE_SHOP;
};

export const fetchShopsAC: FetchShopsActionType = (payload: PayloadType[]) => ({
  type: ShopActions.FETCH_SHOPS,
  payload,
});

export type FetchShopsActionType = (payload: PayloadType[]) => {
  payload: PayloadType[];
  type: ShopActions.FETCH_SHOPS;
};
