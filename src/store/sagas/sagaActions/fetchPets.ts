import { FETCH_PETS } from '../sagasActionsTypes/sagasActionsType';

export const fetchPetsAction = (): fetchPetsActionType => ({
  type: FETCH_PETS,
});

export type fetchPetsActionType = {
  type: typeof FETCH_PETS;
};
