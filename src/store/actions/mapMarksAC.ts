import { chaptersName } from '../../enum/chapters';

export type PayloadType = {
  id: string;
  chapter: chaptersName;
  pinColor: string;
  title: string;
  description: string;
  coordinate: { latitude: number; longitude: number };
};
export type RemovePayloadType = {
  id: string;
};

export enum MapMarksActions {
  ADD_MAP_MARK = 'add_map_mark',
  REMOVE_MAP_MARK = 'remove_map_mark',
  FETCH_MAP_MARKS = 'fetch_map_marks',
}

export const addMapMarkAC: AddMapMarkActionType = (payload: PayloadType) => ({
  type: MapMarksActions.ADD_MAP_MARK,
  payload,
});

export type AddMapMarkActionType = (payload: PayloadType) => {
  payload: PayloadType;
  type: MapMarksActions.ADD_MAP_MARK;
};

export const removeMapMarkAC: removeMapMarkActionType = (payload: RemovePayloadType) => ({
  type: MapMarksActions.REMOVE_MAP_MARK,
  payload,
});

export type removeMapMarkActionType = (payload: RemovePayloadType) => {
  payload: RemovePayloadType;
  type: MapMarksActions.REMOVE_MAP_MARK;
};

export const fetchMapMarksAC: FetchMapMarksActionType = (payload: PayloadType[]) => ({
  type: MapMarksActions.FETCH_MAP_MARKS,
  payload,
});

export type FetchMapMarksActionType = (payload: PayloadType[]) => {
  payload: PayloadType[];
  type: MapMarksActions.FETCH_MAP_MARKS;
};
