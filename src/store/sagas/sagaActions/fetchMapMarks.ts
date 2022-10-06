import { FETCH_MAP_MARKS } from '../sagasActionsTypes/sagasActionsType';

export const fetchMapMarksAction = (): fetchMapMarksActionType => ({
  type: FETCH_MAP_MARKS,
});

export type fetchMapMarksActionType = {
  type: typeof FETCH_MAP_MARKS;
};
