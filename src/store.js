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

import counterReducer from './ducks/profile/profile-slice';
import stageReducer from './ducks/stages/stage-controller-slice';
import navbarReducer from './ducks/navbar/navbar-slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = persistCombineReducers(persistConfig, {
  counter: counterReducer,
  stage: stageReducer,
  navbar: navbarReducer,
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
