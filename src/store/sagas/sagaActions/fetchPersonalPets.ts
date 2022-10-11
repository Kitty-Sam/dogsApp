import { FETCH_PERSONAL_PETS } from '../sagasActionsTypes/sagasActionsType';

export const fetchPersonalPetsAction = (): fetchPersonalPetsActionType => ({
  type: FETCH_PERSONAL_PETS,
});

export type fetchPersonalPetsActionType = {
  type: typeof FETCH_PERSONAL_PETS;
};
