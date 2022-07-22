export type PayloadType = {
  id: string;
  title: string;
  info: string;
};

export type RemovePayloadType = Omit<PayloadType, 'title' | 'info'>;

export enum ShopActions {
  ADD_SHOP = 'add_shop',
  REMOVE_SHOP = 'remove_shop',
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
