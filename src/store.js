import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './domain/Profile/sliceProfile';
import stageReducer from './domain/Settings/sliceStageController';

export default configureStore({
  reducer: {
    counter: counterReducer,
    stage: stageReducer,
  },
});
