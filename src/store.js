import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './domain/Profile/sliceProfile';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
