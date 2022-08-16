import { FETCH_FAVORITE_PETS_IDS } from '../sagasActionsTypes/sagasActionsType';

export const fetchFavoritePetsIdsAction = (): fetchFavoritePetsIdsActionType => ({
  type: FETCH_FAVORITE_PETS_IDS,
});

export type fetchFavoritePetsIdsActionType = {
  type: typeof FETCH_FAVORITE_PETS_IDS;
};
