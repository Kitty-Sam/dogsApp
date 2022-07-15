import { ItemType } from '../../components/ItemContainer/type';
import { addClinicAC, ClinicActions, removeClinicAC } from '../actions/clinicAC';
import { chaptersName } from '../../enum/chapters';
import { LoginActions, toggleIsLoggedAC } from '../actions/loginAC';

const initialState: initialStateType = {
  isLogged: false,
};

type initialStateType = {
  isLogged: boolean;
};

type ActionsType = ReturnType<typeof toggleIsLoggedAC>;

export const loginReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case LoginActions.TOGGLE_IS_LOGGED: {
      return {
        ...state,
        isLogged: action.payload.isLogged,
      };
    }

    default:
      return state;
  }
};
