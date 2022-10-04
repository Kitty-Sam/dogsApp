import { ItemType } from '../../components/ItemContainer/type';
import { addShopAC, fetchShopsAC, removeShopAC, ShopActions } from '../actions/shopAC';

const initialState: initialStateType = {
  shops: [],
};

type initialStateType = {
  shops: ItemType[];
};

type ActionsType = ReturnType<typeof addShopAC> | ReturnType<typeof removeShopAC> | ReturnType<typeof fetchShopsAC>;

export const shopsReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case ShopActions.ADD_SHOP:
      {
        const { id, title, info, chapter, address, phone } = action.payload;
        const hasShop = state.shops.find(shop => shop.id === id);

        if (!hasShop) {
          const newShop: ItemType = {
            id,
            title,
            info,
            chapter,
            phone,
            address,
          };
          return {
            ...state,
            shops: [newShop, ...state.shops],
          };
        }
      }
      break;
    case ShopActions.REMOVE_SHOP: {
      const { id } = action.payload;
      return { ...state, shops: state.shops.filter(shop => shop.id !== id) };
    }

    case ShopActions.FETCH_SHOPS: {
      return {
        ...state,
        shops: action.payload,
      };
    }
    default:
      return state;
  }
};
