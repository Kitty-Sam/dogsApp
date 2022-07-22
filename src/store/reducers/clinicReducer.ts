import { ItemType } from '../../components/ItemContainer/type';
import { addClinicAC, ClinicActions, fetchClinicsAC, removeClinicAC } from '../actions/clinicAC';
import { chaptersName } from '../../enum/chapters';

const initialState: initialStateType = {
  clinics: [],
};

type initialStateType = {
  clinics: ItemType[];
};

type ActionsType =
  | ReturnType<typeof addClinicAC>
  | ReturnType<typeof removeClinicAC>
  | ReturnType<typeof fetchClinicsAC>;

export const clinicsReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case ClinicActions.ADD_CLINIC:
      {
        const { id, title, info } = action.payload;
        const hasClinic = state.clinics.find(clinic => clinic.id === id);

        if (!hasClinic) {
          const newClinic: ItemType = {
            id,
            title,
            info,
            chapter: chaptersName.CLINIC,
          };
          return {
            ...state,
            clinics: [newClinic, ...state.clinics],
          };
        }
      }
      break;

    case ClinicActions.REMOVE_CLINIC: {
      const { id } = action.payload;
      return {
        ...state,
        clinics: state.clinics.filter(clinic => clinic.id !== id),
      };
    }

    case ClinicActions.FETCH_CLINICS: {
      return {
        ...state,
        clinics: action.payload,
      };
    }
    default:
      return state;
  }
};
