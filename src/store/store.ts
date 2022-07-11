import { combineReducers } from 'redux';
import { shopsReducer } from './reducers/shopReducer';
import { clinicsReducer } from './reducers/clinicReducer';
import { mastersReducer } from './reducers/masterReducer';

export const rootReducer = combineReducers({
  shops: shopsReducer,
  clinics: clinicsReducer,
  masters: mastersReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
