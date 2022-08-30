import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, persistCombineReducers,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import profileReducer from './ducks/profile/reducer';
import stageReducer from './ducks/stages/reducer';
import navbarReducer from './ducks/navbar/reducer';
import errorsReducer from './ducks/errors/reducer';
import projectsReducer from './ducks/projects/reducer';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = persistCombineReducers(persistConfig, {
  profile: profileReducer,
  stage: stageReducer,
  navbar: navbarReducer,
  errors: errorsReducer,
  projects: projectsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
