import { combineReducers } from 'redux';
import { shopsReducer } from './reducers/shopReducer';
import { clinicsReducer } from './reducers/clinicReducer';
import { mastersReducer } from './reducers/masterReducer';
import { loginReducer } from './reducers/loginReducer';
import { appReducer } from './reducers/appReducer';
import { userReducer } from './reducers/userReducer';
import { petSittersReducer } from './reducers/petSitterReducer';
import { groomersReducer } from './reducers/groomerReducer';
import { trainersReducer } from './reducers/trainerReducer';
import { dogFriendliesReducer } from './reducers/dogFriendlyReducer';
import { mapMarksReducer } from './reducers/mapMarksReducer';

export const rootReducer = combineReducers({
  shops: shopsReducer,
  clinics: clinicsReducer,
  masters: mastersReducer,
  petSitters: petSittersReducer,
  groomers: groomersReducer,
  trainers: trainersReducer,
  dog_friendlies: dogFriendliesReducer,
  login: loginReducer,
  mapMarks: mapMarksReducer,
  app: appReducer,
  user: userReducer,
});

export type AppStoreType = ReturnType<typeof rootReducer>;
