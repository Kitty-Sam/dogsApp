import { ItemType } from '../../components/ItemContainer/type';
import { addShopAC, removeShopAC, ShopActions } from '../actions/shopAC';
import { chaptersName } from '../../enum/chapters';

const initialState: initialStateType = {
  shops: [
    {
      id: 'Zoobar',
      title: 'Zoobar',
      info: 'ul.Filimonova, 53',
      chapter: chaptersName.SHOP,
    },
    {
      id: 'Zoobazar',
      title: 'Zoobazar',
      info: 'ul.Dzerhinskogo, 12',
      chapter: chaptersName.SHOP,
    },
  ],
};

type initialStateType = {
  shops: ItemType[];
};

type ActionsType = ReturnType<typeof addShopAC> | ReturnType<typeof removeShopAC>;

export const shopsReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case ShopActions.ADD_SHOP:
      {
        const { id, title, info } = action.payload;
        const hasShop = state.shops.find(shop => shop.id === id);

        if (!hasShop) {
          const newShop: ItemType = {
            id,
            title,
            info,
            chapter: chaptersName.SHOP,
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
    default:
      return state;
  }
};
