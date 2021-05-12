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
import counterReducer from './domain/Profile/Profile.slice';
import stageReducer from './domain/Settings/StageController.slice';
import navbarReducer from './domain/Navbar/Navbar.slice';

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
