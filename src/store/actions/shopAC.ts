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

export const addShopAC = (payload: PayloadType) => ({
  type: ShopActions.ADD_SHOP,
  payload,
});

export type AddShopActionType = () => {
  payload: PayloadType;
  type: ShopActions.ADD_SHOP;
};

export const removeShopAC = (payload: RemovePayloadType) => ({
  type: ShopActions.REMOVE_SHOP,
  payload,
});

export type RemoveShopActionType = () => {
  payload: RemovePayloadType;
  type: ShopActions.REMOVE_SHOP;
};
