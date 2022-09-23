import { LoginActions, saveCurrentUserAC, saveLoginErrorAC, toggleIsLoggedAC } from '../actions/loginAC';

const initialState: initialStateType = {
  isLogged: false,
  user: {
    currentUserId: '',
    currentUserName: '',
    currentUserPhoto: '',
    currentUserEmail: '',
    currentUserPhone: '',
  },
  error: null,
};

type initialStateType = {
  isLogged: boolean;
  user: {
    currentUserId: string;
    currentUserName: string;
    currentUserPhoto: string;
    currentUserEmail: string;
    currentUserPhone: string;
  };
  error: null | string;
};

type ActionsType =
  | ReturnType<typeof saveCurrentUserAC>
  | ReturnType<typeof toggleIsLoggedAC>
  | ReturnType<typeof saveLoginErrorAC>;

export const loginReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case LoginActions.TOGGLE_IS_LOGGED: {
      const { isLogged } = action.payload;
      return {
        ...state,
        isLogged,
      };
    }

    case LoginActions.SAVE_CURRENT_USER: {
      return {
        ...state,
        user: action.payload.user,
      };
    }

    case LoginActions.SAVE_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    default:
      return state;
  }
};
