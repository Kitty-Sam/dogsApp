import { combineReducers } from 'redux';
import { shopsReducer } from './reducers/shopReducer';
import { clinicsReducer } from './reducers/clinicReducer';
import { mastersReducer } from './reducers/masterReducer';
import { loginReducer } from './reducers/loginReducer';
import { appReducer } from './reducers/appReducer';
import { userReducer } from './reducers/userReducer';

export const rootReducer = combineReducers({
  shops: shopsReducer,
  clinics: clinicsReducer,
  masters: mastersReducer,
  login: loginReducer,
  app: appReducer,
  user: userReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
