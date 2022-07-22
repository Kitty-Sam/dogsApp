import { ItemType } from '../../components/ItemContainer/type';
import { addClinicAC, ClinicActions, removeClinicAC } from '../actions/clinicAC';
import { chaptersName } from '../../enum/chapters';

const initialState: initialStateType = {
  clinics: [],
};

type initialStateType = {
  clinics: ItemType[];
};

type ActionsType = ReturnType<typeof addClinicAC> | ReturnType<typeof removeClinicAC>;

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

    default:
      return state;
  }
};
