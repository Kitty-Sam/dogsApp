import { combineReducers } from 'redux';
import { shopsReducer } from './reducers/shopReducer';
import { clinicsReducer } from './reducers/clinicReducer';
import { mastersReducer } from './reducers/masterReducer';
import { loginReducer } from './reducers/loginReducer';

export const rootReducer = combineReducers({
  shops: shopsReducer,
  clinics: clinicsReducer,
  masters: mastersReducer,
  login: loginReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
