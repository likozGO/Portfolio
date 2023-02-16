import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistCombineReducers,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import errorsReducer from './ducks/errors/reducer';
import navbarReducer from './ducks/navbar/reducer';
import profileReducer from './ducks/profile/reducer';
import projectsReducer from './ducks/projects/reducer';
import stageReducer from './ducks/stages/reducer';

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
