import { chaptersName } from '../../enum/chapters';
import { addMapMarkAC, fetchMapMarksAC, MapMarksActions, removeMapMarkAC } from '../actions/mapMarksAC';

export type ItemType = {
  id: string;
  chapter: chaptersName;
  pinColor: string;
  title: string;
  description: string;
  coordinate: { latitude: number; longitude: number };
};

const initialState: initialStateType = {
  mapMarks: [],
};

type initialStateType = {
  mapMarks: ItemType[];
};

type ActionsType =
  | ReturnType<typeof addMapMarkAC>
  | ReturnType<typeof removeMapMarkAC>
  | ReturnType<typeof fetchMapMarksAC>;

export const mapMarksReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case MapMarksActions.ADD_MAP_MARK:
      {
        const { id, title, chapter, pinColor, description, coordinate } = action.payload;
        const hasMapMark = state.mapMarks.find(mark => mark.id === id);

        if (!hasMapMark) {
          const newMapMark: ItemType = {
            id,
            title,
            chapter,
            pinColor,
            description,
            coordinate,
          };
          return {
            ...state,
            mapMarks: [newMapMark, ...state.mapMarks],
          };
        }
      }
      break;

    case MapMarksActions.REMOVE_MAP_MARK: {
      const { id } = action.payload;
      return {
        ...state,
        mapMarks: state.mapMarks.filter(mark => mark.id !== id),
      };
    }

    case MapMarksActions.FETCH_MAP_MARKS: {
      return {
        ...state,
        mapMarks: action.payload,
      };
    }

    default:
      return state;
  }
};
