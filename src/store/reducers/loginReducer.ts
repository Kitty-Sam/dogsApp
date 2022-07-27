import { LoginActions, saveCurrentUserAC, toggleIsLoggedAC } from '../actions/loginAC';

const initialState: initialStateType = {
  isLogged: false,
  user: {
    currentUserId: '',
    currentUserName: '',
    currentUserPhoto: '',
    currentUserEmail: '',
  },
};

type initialStateType = {
  isLogged: boolean;
  user: {
    currentUserId: string;
    currentUserName: string;
    currentUserPhoto: string;
    currentUserEmail: string;
  };
};

type ActionsType = ReturnType<typeof saveCurrentUserAC> | ReturnType<typeof toggleIsLoggedAC>;

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

    default:
      return state;
  }
};
